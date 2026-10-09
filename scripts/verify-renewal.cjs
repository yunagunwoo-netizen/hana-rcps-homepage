// Local production build and public post-deploy QA. User authorized headless-browser verification.
/* eslint-disable @typescript-eslint/no-require-imports -- Executable Node CommonJS QA helper; not browser application code. */
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
if(!process.env.PREVIEW_PLAYWRIGHT_ROOT)throw new Error('Set PREVIEW_PLAYWRIGHT_ROOT to an installed Playwright package.');
const {chromium}=require(process.env.PREVIEW_PLAYWRIGHT_ROOT);
const origin=(process.env.RENEWAL_ORIGIN||'http://127.0.0.1:48220').replace(/\/$/,'');
const output=path.resolve(__dirname,'../docs/renewal/production/qa',process.env.RENEWAL_QA_LABEL||'local');fs.mkdirSync(output,{recursive:true});
const result={origin,scope:'actual Next production routes, viewport emulation',runs:[],avatarChecks:[],errors:[]};
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true,chromiumSandbox:true});result.browser=browser.version();
 try{
  for(const width of [1280,768,375,320]){
   const context=await browser.newContext({viewport:{width,height:width>700?900:812},reducedMotion:'reduce'});
   const page=await context.newPage(),errors=[],videoRequests=[];
   page.on('pageerror',error=>errors.push(error.message));page.on('request',request=>{if(/\.mp4(?:\?|$)/.test(request.url()))videoRequests.push(request.url());});
   for(const route of ['/','/dangitalk']){
    videoRequests.length=0;
    const response=await page.goto(origin+route,{waitUntil:'load',timeout:30000});assert.equal(response.status(),200);
    await page.evaluate(()=>document.fonts.ready);
    assert.equal(videoRequests.length,0,'Reduced-motion first paint should not fetch MP4');
    for(const section of await page.locator('main>section').all())await section.scrollIntoViewIfNeeded();
    await page.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
    const dimensions=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,broken:[...document.images].filter(i=>!i.naturalWidth).length}));assert(dimensions.scrollWidth<=width+1,route+' overflow '+JSON.stringify(dimensions));assert.equal(dimensions.broken,0);
    const text=await page.locator('body').innerText();assert(!/DESIGN 06|서비스 시안|디자인 검토용/.test(text));
    assert(!(await page.locator('meta[name=robots]').getAttribute('content')).includes('noindex'));
    assert.equal(new URL(await page.locator('link[rel=canonical]').getAttribute('href')).href,new URL('https://hanarcps.com'+(route==='/'?'/':route)).href);
    if(route==='/'){
     assert((await page.locator('.hero-ping-link').getAttribute('href')).startsWith('https://ping.ai.kr/'));
     assert.equal(await page.locator('[data-landing-motion]').getAttribute('data-motion-controls'),'minimal');
     if(width<700){await page.locator('.menu-button').click();assert.equal(await page.locator('.menu-button').getAttribute('aria-expanded'),'true');await page.keyboard.press('Escape');assert.equal(await page.locator('.menu-button').getAttribute('aria-expanded'),'false');assert(await page.locator('.menu-button').evaluate(i=>i===document.activeElement));}
    }else{
     assert((await page.locator('.dheader .dlogo img').getAttribute('src')).endsWith('dangitalk-dubi-d.webp'));
     assert.equal(await page.locator('[data-landing-motion]').getAttribute('data-motion-controls'),'overlay');
     assert.equal(await page.locator('input[type=file]').count(),0);
     assert((await page.locator('[data-motion-poster]').getAttribute('src')).endsWith('dang-poster-v4.webp'));
     assert(text.includes('아직 구현되지 않았습니다'));
     const avatars=await page.locator('.avatar-example-grid img').evaluateAll(images=>images.map(image=>{const box=image.getBoundingClientRect();return{width:box.width,height:box.height,naturalWidth:image.naturalWidth,naturalHeight:image.naturalHeight};}));
     assert.equal(avatars.length,5);assert(avatars.every(image=>image.width>0&&Math.abs(image.width-image.height)<1),'Avatar images must remain circular, without stretching: '+JSON.stringify(avatars));
     result.avatarChecks.push({width,avatars});
     if(width===1280||width===375){await page.locator('#ways').screenshot({path:path.join(output,'avatar-section-'+width+'.png')});await page.locator('.avatar-example-grid').screenshot({path:path.join(output,'avatar-row-'+width+'.png')});}
     await page.getByRole('tab',{name:/이름·견종·테마/}).click();assert((await page.getByRole('tabpanel').locator('img').getAttribute('src')).endsWith('dang-theme.jpg'));
     await page.getByRole('tab',{name:/이름·견종·테마/}).press('Home');assert((await page.getByRole('tabpanel').locator('img').getAttribute('src')).endsWith('dang-family.jpg'));
     if(width===375){const motion=page.locator('[data-landing-motion]');await motion.scrollIntoViewIfNeeded();await motion.locator('button').click();await page.waitForFunction(()=>document.querySelector('video').currentTime>.1);assert((await motion.locator('video').getAttribute('src')).endsWith('dang-mobile-v4.mp4'));await motion.locator('button').click();assert(await motion.locator('video').evaluate(video=>video.paused));assert.equal(new Set(videoRequests).size,1);}
     const headerLogo=page.locator('.dheader .dlogo');assert.equal(await headerLogo.locator('img').evaluate(i=>i.width),width<700?28:34);
    }
    await page.evaluate(()=>scrollTo(0,0));
    if(width===1280||width===375)await page.screenshot({path:path.join(output,(route==='/'?'company':'dang')+'-'+width+'.png')});
    result.runs.push({route,width,dimensions,initialVideoRequests:0,errors:[...errors]});
   }
   // Exercise Next client navigation: route CSS and media effects must not leak across pages.
   await page.locator('.dfooter a[href="/"]').click();await page.waitForSelector('.company-site');
   await page.locator('.service-dang a.text-link').click();await page.waitForSelector('.dang-site');
   assert((await page.locator('.dheader .dlogo img').getAttribute('src')).endsWith('dangitalk-dubi-d.webp'));
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   assert.equal(errors.length,0,'Hydration/runtime errors: '+errors.join('\n'));
   await context.close();
  }
  const context=await browser.newContext({viewport:{width:1280,height:900}}),page=await context.newPage(),videos=[];
  page.on('request',request=>{if(/\.mp4/.test(request.url()))videos.push(request.url());});
  await page.goto(origin+'/',{waitUntil:'load'});await page.waitForFunction(()=>document.querySelector('video').currentTime>.1);
  assert(videos.length>0);assert(videos.every(url=>url.endsWith('ping-desktop-v1.mp4')));result.desktopAutoSingleSource=true;
  assert.equal(await page.locator('[data-landing-motion]').getAttribute('data-motion-repeat'),'visible');
  await page.locator('video').evaluate(video=>{video.dataset.qaEnded='0';video.addEventListener('ended',()=>{video.dataset.qaEnded=String(Number(video.dataset.qaEnded)+1);});});
  await page.waitForFunction(()=>Number(document.querySelector('video').dataset.qaEnded)>=2&&!document.querySelector('video').paused,null,{timeout:15000});
  result.companyContinuesAfterTwoLoops=true;
  await page.locator('#about').scrollIntoViewIfNeeded();await page.waitForFunction(()=>document.querySelector('video').paused);
  await page.evaluate(()=>scrollTo(0,0));await page.waitForFunction(()=>!document.querySelector('video').paused);result.outOfViewPauseAndResume=true;
  // Simulate the standard visibility event in a fresh QA page; no user's browser state is changed.
  await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>document.body.dataset.qaHidden==='true'});document.body.dataset.qaHidden='true';document.dispatchEvent(new Event('visibilitychange'));});
  await page.waitForFunction(()=>document.querySelector('video').paused);
  await page.evaluate(()=>{document.body.dataset.qaHidden='false';document.dispatchEvent(new Event('visibilitychange'));});
  await page.waitForFunction(()=>!document.querySelector('video').paused);result.simulatedHiddenTabPauseAndResume=true;
  const control=page.locator('[data-motion-control]');
  result.companyControlAppearance=await control.evaluate(button=>{const style=getComputedStyle(button),box=button.getBoundingClientRect(),frame=button.closest('figure').getBoundingClientRect();return{background:style.backgroundColor,border:style.borderTopWidth,padding:style.paddingTop,labelsHidden:[...button.children].every(child=>getComputedStyle(child).display==='none'),width:box.width,height:box.height,frameWidth:frame.width,frameHeight:frame.height};});
  assert.equal(result.companyControlAppearance.background,'rgba(0, 0, 0, 0)');assert.equal(result.companyControlAppearance.border,'0px');assert.equal(result.companyControlAppearance.padding,'0px');assert.equal(result.companyControlAppearance.labelsHidden,true);assert(Math.abs(result.companyControlAppearance.width-result.companyControlAppearance.frameWidth)<1);assert(Math.abs(result.companyControlAppearance.height-result.companyControlAppearance.frameHeight)<1);
  await control.focus();await control.press('Space');assert(await page.locator('video').evaluate(video=>video.paused));assert.equal(await control.evaluate(button=>getComputedStyle(button).outlineStyle),'solid');
  await page.locator('#about').scrollIntoViewIfNeeded();await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(250);
  assert(await page.locator('video').evaluate(video=>video.paused));result.manualPausePersists=true;
  await control.press('Enter');await page.waitForFunction(()=>document.querySelector('video').currentTime>.1&&!document.querySelector('video').paused);result.companyKeyboardToggle=true;
  await control.click();assert(await page.locator('video').evaluate(video=>video.paused));await control.click();await page.waitForFunction(()=>!document.querySelector('video').paused);result.companyVideoClickToggle=true;
  await page.locator('h1').click();
  await page.screenshot({path:path.join(output,'company-without-pause-bar.png')});
  await control.click();
  await page.locator('video').evaluate(video=>video.dispatchEvent(new Event('error')));assert.equal(await page.locator('[data-landing-motion]').getAttribute('data-motion-state'),'error');assert(await page.locator('[data-motion-label]').isVisible());result.companySimulatedErrorRestoresPlayButton=true;
  await context.close();
  for(const policy of ['mobile','saveData']){
   const policyContext=await browser.newContext({viewport:{width:policy==='mobile'?375:1280,height:900}});
   if(policy==='saveData')await policyContext.addInitScript(()=>{const connection=new EventTarget();connection.saveData=true;Object.defineProperty(navigator,'connection',{configurable:true,value:connection});});
   const policyPage=await policyContext.newPage();
   for(const route of ['/','/dangitalk']){
    await policyPage.goto(origin+route,{waitUntil:'load'});await policyPage.locator('[data-landing-motion]').scrollIntoViewIfNeeded();
    await policyPage.waitForFunction(()=>!document.querySelector('[data-motion-control]').hidden);await policyPage.waitForTimeout(250);
    assert.equal(await policyPage.locator('video').getAttribute('src'),null,route+policy+' autoplay must stay blocked');
    if(route==='/'){assert(await policyPage.locator('[data-motion-label]').isVisible());if(policy==='mobile')await policyPage.screenshot({path:path.join(output,'company-mobile-play-button.png')});}
    await policyPage.locator('[data-motion-control]').click();await policyPage.waitForFunction(()=>document.querySelector('video').currentTime>.1);
    if(route==='/'){assert(!(await policyPage.locator('[data-motion-label]').isVisible()));if(policy==='mobile')await policyPage.screenshot({path:path.join(output,'company-mobile-no-pause-bar.png')});}
    if(route==='/dangitalk'){assert(await policyPage.locator('video').evaluate(video=>video.loop&&video.duration===2&&video.muted));}
    await policyPage.locator('[data-motion-control]').click();assert(await policyPage.locator('video').evaluate(video=>video.paused));
    result[(route==='/dangitalk'?'dang':'')+policy+'ManualPlaybackOnly']=true;
   }
   await policyContext.close();
  }
  const dangContext=await browser.newContext({viewport:{width:1280,height:900},reducedMotion:'reduce'}),dangPage=await dangContext.newPage(),dangRequests=[];
  dangPage.on('request',request=>{if(/\.mp4/.test(request.url()))dangRequests.push(request.url());});
  await dangPage.goto(origin+'/dangitalk',{waitUntil:'load'});const dangMotion=dangPage.locator('[data-landing-motion]');assert.equal(await dangMotion.getAttribute('data-motion-repeat'),'visible');
  await dangMotion.scrollIntoViewIfNeeded();
  await dangPage.locator('video').evaluate(video=>{let previous=0;video.dataset.qaWraps='0';video.dataset.qaPauses='0';video.dataset.qaEnded='0';video.addEventListener('timeupdate',()=>{if(previous>video.currentTime+.5)video.dataset.qaWraps=String(Number(video.dataset.qaWraps)+1);previous=video.currentTime;});video.addEventListener('pause',()=>{video.dataset.qaPauses=String(Number(video.dataset.qaPauses)+1);});video.addEventListener('ended',()=>{video.dataset.qaEnded=String(Number(video.dataset.qaEnded)+1);});});
  await dangMotion.locator('button').click();await dangPage.waitForFunction(()=>document.querySelector('video').readyState>=1);
  result.dangMedia=await dangPage.locator('video').evaluate(video=>({duration:video.duration,width:video.videoWidth,height:video.videoHeight,src:video.currentSrc,muted:video.muted,loop:video.loop}));
  assert.equal(result.dangMedia.duration,2);assert.equal(result.dangMedia.width,720);assert.equal(result.dangMedia.height,1280);assert.equal(result.dangMedia.muted,true);assert.equal(result.dangMedia.loop,true);assert(result.dangMedia.src.endsWith('dang-desktop-v4.mp4'));
  await dangPage.waitForFunction(()=>Number(document.querySelector('video').dataset.qaWraps)>=3&&!document.querySelector('video').paused,null,{timeout:15000});
  const loopEvents=await dangPage.locator('video').evaluate(video=>({wraps:Number(video.dataset.qaWraps),pauses:Number(video.dataset.qaPauses),ended:Number(video.dataset.qaEnded)}));assert.equal(loopEvents.pauses,0);assert.equal(loopEvents.ended,0);result.dangNativeContinuousLoop=loopEvents;assert.equal(new Set(dangRequests).size,1);
  assert.equal(await dangMotion.getAttribute('data-motion-state'),'playing');
  await dangPage.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await dangPage.waitForFunction(()=>document.querySelector('video').paused);await dangMotion.scrollIntoViewIfNeeded();await dangPage.waitForFunction(()=>!document.querySelector('video').paused);result.dangOutOfViewPauseAndResume=true;
  await dangPage.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>document.body.dataset.qaHidden==='true'});document.body.dataset.qaHidden='true';document.dispatchEvent(new Event('visibilitychange'));});await dangPage.waitForFunction(()=>document.querySelector('video').paused);
  await dangPage.evaluate(()=>{document.body.dataset.qaHidden='false';document.dispatchEvent(new Event('visibilitychange'));});await dangPage.waitForFunction(()=>!document.querySelector('video').paused);result.dangSimulatedHiddenPauseAndResume=true;
  await dangMotion.locator('button').click();assert(await dangPage.locator('video').evaluate(video=>video.paused));await dangPage.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await dangMotion.scrollIntoViewIfNeeded();await dangPage.waitForTimeout(250);assert(await dangPage.locator('video').evaluate(video=>video.paused));result.dangManualPausePersists=true;
  for(const [label,time] of [['loop-start',0.001],['overlap-start',1.75],['overlap-middle',1.875],['before-repeat',1.95]]){
   await dangPage.locator('video').evaluate(async(video,time)=>{await new Promise(resolve=>{video.addEventListener('seeked',resolve,{once:true});video.currentTime=time;});},time);await dangMotion.screenshot({path:path.join(output,'dang-'+label+'.png')});
  }
  await dangPage.locator('.dang-motion-story').screenshot({path:path.join(output,'dang-loop-section.png')});await dangContext.close();
  for(const [from,to] of [['/dangitalk.html','/dangitalk'],['/dang-v7.html','/dangitalk'],['/index.html','/'],['/ping.html','https://ping.ai.kr/']]){const response=await fetch(origin+from,{redirect:'manual'});assert.equal(response.status,308);assert(response.headers.get('location').endsWith(to));}
  const range=await fetch(origin+'/renewal/assets/landing-motion/dang-mobile-v4.mp4',{headers:{Range:'bytes=0-1023'}});assert.equal(range.status,206);assert.equal((await range.arrayBuffer()).byteLength,1024);result.mediaRange=true;
  assert((await(await fetch(origin+'/sitemap.xml')).text()).includes('https://hanarcps.com/dangitalk'));
 }catch(error){result.errors.push(error.message);throw error;}
 finally{await browser.close();fs.writeFileSync(path.join(output,'QA.json'),JSON.stringify(result,null,2));}
 console.log(JSON.stringify(result,null,2));
})().catch(error=>{console.error(error);process.exitCode=1});
