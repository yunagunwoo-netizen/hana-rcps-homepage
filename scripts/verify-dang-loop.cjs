/* eslint-disable @typescript-eslint/no-require-imports -- Offline decoded-frame QA. */
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),metrics=[];
for(const version of [3,4]){
 const raw=cp.execFileSync('ffmpeg',['-v','error','-i',path.join(root,`public/renewal/assets/landing-motion/dang-desktop-v${version}.mp4`),'-vf','scale=90:160','-pix_fmt','gray','-f','rawvideo','-'],{maxBuffer:8*1024*1024});
 const size=90*160,n=raw.length/size;assert(Number.isInteger(n)&&n>1);
 const difference=(a,b)=>{let sum=0,count=0;for(let y=48;y<112;y++)for(let x=0;x<90;x++){sum+=Math.abs(raw[a*size+y*90+x]-raw[b*size+y*90+x]);count++;}return sum/count;};
 const adjacent=[];for(let i=1;i<n;i++)adjacent.push(difference(i-1,i));adjacent.sort((a,b)=>a-b);
 metrics.push({version,frames:n,boundaryMeanAbsoluteGrayDifference:difference(n-1,0),medianAdjacent:adjacent[Math.floor(adjacent.length/2)],p95Adjacent:adjacent[Math.floor(adjacent.length*.95)]});
}
assert(metrics[1].boundaryMeanAbsoluteGrayDifference<metrics[0].boundaryMeanAbsoluteGrayDifference,'The final encoded loop boundary must improve on v3');
fs.writeFileSync(path.join(root,'docs/renewal/production/media/dang-seamless-v4/BOUNDARY_QA.json'),JSON.stringify({method:'Decoded grayscale90x160 family/dog ROI y48–112; last/first vs adjacent frames. Supporting metric, not a guarantee of perceived seamlessness.',metrics},null,2));
console.log(JSON.stringify(metrics,null,2));
