// convert-images.js

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDir = path.join(__dirname, './src/assets/img/pictures'); // ← ИЗМЕНИЛ ТУТ

async function convertImages(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertImages(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

      try {
        await sharp(fullPath).webp({ quality: 80 }).toFile(outputPath);

        console.log(`✅ Converted: ${file} → ${path.basename(outputPath)}`);
      } catch (err) {
        console.error(`❌ Error: ${file}`, err.message);
      }
    }
  }
}

convertImages(imageDir);
