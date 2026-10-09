/* eslint-disable @typescript-eslint/no-require-imports -- Offline media build helper. */
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'docs/renewal/media-review/family-reaction-source.mp4');
const output = path.join(root, 'public/renewal/assets/landing-motion');
const recordDir = path.join(root, 'docs/renewal/production/media/dang-forward-v3');
fs.mkdirSync(recordDir, { recursive: true });
const run = (tool, args) => cp.execFileSync(tool, args, { stdio: 'pipe' });
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const records = [];
for (const [variant, width, height, fps, crf] of [['desktop',720,1280,24,25],['mobile',480,854,20,26]]) {
  const file = path.join(output, `dang-${variant}-v3.mp4`);
  // Forward-only walk, then a tighter family reaction. Direct cuts avoid doubled faces.
  const filter = `[0:v]split=2[wide][reaction];` +
    `[wide]trim=start=2.3:end=4.3,setpts=PTS-STARTPTS,scale=${width}:${height}:flags=lanczos,fps=${fps},setsar=1[a];` +
    `[reaction]trim=start=0.3:end=2.3,setpts=PTS-STARTPTS,crop=450:800:0:240,scale=${width}:${height}:flags=lanczos,fps=${fps},setsar=1[b];` +
    `[a][b]concat=n=2:v=1:a=0[out]`;
  run('ffmpeg', ['-hide_banner','-loglevel','error','-y','-i',source,'-filter_complex',filter,'-map','[out]','-an','-c:v','libx264','-preset','slow','-crf',String(crf),'-pix_fmt','yuv420p','-movflags','+faststart',file]);
  const probe = JSON.parse(run('ffprobe',['-v','error','-show_streams','-show_format','-of','json',file]));
  if (Number(probe.format.duration) !== 4 || probe.streams.length !== 1 || probe.streams[0].codec_name !== 'h264') throw new Error('Incorrect media output');
  run('ffmpeg',['-v','error','-i',file,'-f','null','-']);
  records.push({file:'/renewal/assets/landing-motion/'+path.basename(file),bytes:fs.statSync(file).size,sha256:hash(file),width,height,fps,duration:4,audioTracks:0,filter});
}
const poster = path.join(output,'dang-poster-v3.webp');
run('ffmpeg',['-hide_banner','-loglevel','error','-y','-ss','0','-i',path.join(output,'dang-mobile-v3.mp4'),'-frames:v','1','-c:v','libwebp','-quality','72',poster]);
records.push({file:'/renewal/assets/landing-motion/dang-poster-v3.webp',bytes:fs.statSync(poster).size,sha256:hash(poster)});
const record = {dateKst:'2026-10-09',source:path.relative(root,source).replaceAll('\\','/'),sourceSha256:hash(source),sourceJob:'f5bb8832-7f79-4535-94a5-097b8edee435',decision:'Forward-only 2s wide walk (source2.3–4.3), then 2s family close-up (source0.3–2.3), direct cuts. No reverse, crossfade, artificial interpolation, audio or new generation.',timeline:[{at:0,duration:2,sourceFrom:2.3,sourceTo:4.3,crop:null},{at:2,duration:2,sourceFrom:0.3,sourceTo:2.3,crop:{x:0,y:240,width:450,height:800}}],newGenerationCalls:0,paidCalls:0,creditBalance:'Not queried; no new paid operation.',files:records,tools:{ffmpeg:run('ffmpeg',['-version']).toString().split('\n')[0],ffprobe:run('ffprobe',['-version']).toString().split('\n')[0]}};
fs.writeFileSync(path.join(recordDir,'MEDIA.json'),JSON.stringify(record,null,2));
console.log(JSON.stringify(record,null,2));
