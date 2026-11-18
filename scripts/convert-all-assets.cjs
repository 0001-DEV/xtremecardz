const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

const assetsDir = path.join(__dirname, '../src/assets');

async function convertImages() {
  console.log('=== CONVERTING IMAGES TO WEBP ===');
  const files = fs.readdirSync(assetsDir);
  const imageFiles = files.filter(f => /\.(png|jpe?g)$/i.test(f));
  
  let totalOrig = 0;
  let totalWebp = 0;
  let count = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(assetsDir, file);
    const baseName = file.replace(/\.(png|jpe?g)$/i, '');
    const outputPath = path.join(assetsDir, `${baseName}.webp`);

    try {
      const metadata = await sharp(inputPath).metadata();
      const origSize = fs.statSync(inputPath).size;
      totalOrig += origSize;

      let pipeline = sharp(inputPath);
      // Downscale if unreasonably gigantic (> 2400px wide)
      if (metadata.width && metadata.width > 2400) {
        pipeline = pipeline.resize({ width: 2400, withoutEnlargement: true });
      }

      await pipeline.webp({ quality: 84, effort: 4 }).toFile(outputPath);
      const newSize = fs.statSync(outputPath).size;
      totalWebp += newSize;
      count++;

      const reduction = ((1 - newSize / origSize) * 100).toFixed(1);
      console.log(`[${count}/${imageFiles.length}] ${file} (${(origSize/1024).toFixed(0)} KB) -> ${baseName}.webp (${(newSize/1024).toFixed(0)} KB, -${reduction}%)`);
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err.message);
    }
  }

  console.log(`\nImages converted: ${count}`);
  console.log(`Original total: ${(totalOrig / 1024 / 1024).toFixed(2)} MB`);
  console.log(`WebP total: ${(totalWebp / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total savings: ${( (1 - totalWebp / totalOrig) * 100 ).toFixed(1)}%\n`);
}

function convertVideos() {
  console.log('=== CONVERTING VIDEOS TO WEBM ===');
  const videos = ['A.mp4', 'B.mp4', 'C.mp4', 'D.mp4', 'E.mp4'];
  let totalOrig = 0;
  let totalWebm = 0;

  for (const v of videos) {
    const inputPath = path.join(assetsDir, v);
    if (!fs.existsSync(inputPath)) continue;

    const baseName = v.replace('.mp4', '');
    const outputPath = path.join(assetsDir, `${baseName}.webm`);
    const origSize = fs.statSync(inputPath).size;
    totalOrig += origSize;

    console.log(`Converting ${v} (${(origSize / 1024 / 1024).toFixed(2)} MB) to ${baseName}.webm...`);
    try {
      const cmd = `"${ffmpegPath}" -i "${inputPath}" -c:v libvpx-vp9 -b:v 0 -crf 32 -c:a libopus -deadline good -cpu-used 4 -y "${outputPath}"`;
      execSync(cmd, { stdio: 'pipe' });
      const newSize = fs.statSync(outputPath).size;
      totalWebm += newSize;
      const reduction = ((1 - newSize / origSize) * 100).toFixed(1);
      console.log(`✓ ${baseName}.webm: ${(newSize / 1024 / 1024).toFixed(2)} MB (-${reduction}%)`);
    } catch (err) {
      console.error(`Error converting ${v}:`, err.message);
    }
  }

  console.log(`\nOriginal videos total: ${(totalOrig / 1024 / 1024).toFixed(2)} MB`);
  console.log(`WebM videos total: ${(totalWebm / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Video savings: ${( (1 - totalWebm / totalOrig) * 100 ).toFixed(1)}%\n`);
}

async function run() {
  await convertImages();
  convertVideos();
  console.log('ALL CONVERSIONS COMPLETE!');
}

run();
