const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicImagesDir = path.join(__dirname, "../public/images");
const outImagesDir = path.join(__dirname, "../out/images");

async function optimizeImages() {
  console.log("Optimizing images for static export...");
  
  if (!fs.existsSync(outImagesDir)) {
    console.log("Creating output directory...");
    fs.mkdirSync(outImagesDir, { recursive: true });
  }

  const files = fs.readdirSync(publicImagesDir);
  
  for (const file of files) {
    if (file.match(/\.(png|jpe?g)$/i)) {
      const inputPath = path.join(publicImagesDir, file);
      
      // We will create parallel WebP files alongside the original format.
      // Next.js static exported components will fallback to WebP gracefully 
      // if using native HTML picture tags or we can rewrite the paths.
      
      const fileNameRaw = path.parse(file).name;
      const webpPath = path.join(publicImagesDir, `${fileNameRaw}.webp`);
      const mobileWebpPath = path.join(publicImagesDir, `${fileNameRaw}-mobile.webp`);
      
      if (!fs.existsSync(webpPath)) {
        await sharp(inputPath)
          .resize(1200) // Max width for desktop
          .webp({ quality: 80 })
          .toFile(webpPath);
        console.log(`Generated WebP: ${webpPath}`);
        
        await sharp(inputPath)
          .resize(600) // Max width for mobile
          .webp({ quality: 80 })
          .toFile(mobileWebpPath);
        console.log(`Generated Mobile WebP: ${mobileWebpPath}`);
      }
    }
  }
  console.log("Image optimization complete.");
}

optimizeImages().catch(console.error);
