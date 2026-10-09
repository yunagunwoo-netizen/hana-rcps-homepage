/* eslint-disable @typescript-eslint/no-require-imports -- Offline video build and verification helper. */
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),source=path.join(root,'docs/renewal/media-review/family-reaction-source.mp4');
const output=path.join(root,'public/renewal/assets/landing-motion'),recordsDir=path.join(root,'docs/renewal/production/media/dang-seamless-v4');
fs.mkdirSync(recordsDir,{recursive:true});
const run=(tool,args)=>cp.execFileSync(tool,args,{stdio:'pipe'});
const hash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const files=[];
for(const [variant,width,height,fps,crf] of [['desktop',720,1280,24,25],['mobile',480,854,20,26]]){
 const file=path.join(output,`dang-${variant}-v4.mp4`);
 // One forward-only shot. The 0.25s tail/head overlap is placed at the end;
 // after it, playback wraps from source9.5s back to source9.5s with no hard cut.
 const filter=`[0:v]scale=${width}:${height}:flags=lanczos,fps=${fps},setsar=1,format=yuv420p,split=3[body][tail][head];`+
  `[body]trim=start=9.5:end=11.25,setpts=PTS-STARTPTS[b];`+
  `[tail]trim=start=11.25:end=11.5,setpts=PTS-STARTPTS[t];`+
  `[head]trim=start=9.25:end=9.5,setpts=PTS-STARTPTS[h];`+
  `[t][h]blend=all_expr='A*(1-min(T/(0.25-1/${fps}),1))+B*min(T/(0.25-1/${fps}),1)'[join];`+
  `[b][join]concat=n=2:v=1:a=0[out]`;
 run('ffmpeg',['-hide_banner','-loglevel','error','-y','-i',source,'-filter_complex',filter,'-map','[out]','-an','-c:v','libx264','-preset','slow','-crf',String(crf),'-pix_fmt','yuv420p','-movflags','+faststart',file]);
 const probe=JSON.parse(run('ffprobe',['-v','error','-show_streams','-show_format','-of','json',file]));
 assert.equal(Number(probe.format.duration),2);assert.equal(probe.streams.length,1);assert.equal(probe.streams[0].codec_name,'h264');
 run('ffmpeg',['-v','error','-i',file,'-f','null','-']);
 const bytes=fs.statSync(file).size;assert(bytes<(variant==='mobile'?277413:590883));
 const data=fs.readFileSync(file);let at=0,atoms=[];while(at+8<=data.length){let size=data.readUInt32BE(at);const type=data.toString('ascii',at+4,at+8);if(size===1)size=Number(data.readBigUInt64BE(at+8));if(!size)size=data.length-at;assert(size>=8&&at+size<=data.length);atoms.push({type,offset:at});at+=size;}assert(atoms.find(x=>x.type==='moov').offset<atoms.find(x=>x.type==='mdat').offset);
 files.push({file:'/renewal/assets/landing-motion/'+path.basename(file),bytes,sha256:hash(file),width,height,fps,duration:2,audioTracks:0,fullDecode:true,faststart:true,filter});
}
const poster=path.join(output,'dang-poster-v4.webp');
run('ffmpeg',['-hide_banner','-loglevel','error','-y','-i',path.join(output,'dang-mobile-v4.mp4'),'-frames:v','1','-c:v','libwebp','-quality','72',poster]);
files.push({file:'/renewal/assets/landing-motion/dang-poster-v4.webp',bytes:fs.statSync(poster).size,sha256:hash(poster)});
const record={dateKst:'2026-10-09',source:'docs/renewal/media-review/family-reaction-source.mp4',sourceSha256:hash(source),sourceJob:'f5bb8832-7f79-4535-94a5-097b8edee435',edit:'One forward-only stationary dog/family shot, source9.5–11.25s then 0.25s blended tail11.25–11.5s/head9.25–9.5s.2sloop.No reverse,no close-up jump,no black fade.',newGenerationCalls:0,paidCalls:0,creditBalance:'Not queried; no paid action',files};
fs.writeFileSync(path.join(recordsDir,'MEDIA.json'),JSON.stringify(record,null,2));console.log(JSON.stringify(record,null,2));
