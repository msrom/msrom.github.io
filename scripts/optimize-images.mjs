import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const input = path.join(root, 'Foto CV.jpg');
const outputDir = path.join(root, 'public/images');

await mkdir(outputDir, { recursive: true });

await sharp(input)
  .resize(960, null, { withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(path.join(outputDir, 'portrait.webp'));

await sharp(input)
  .resize(480, null, { withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(path.join(outputDir, 'portrait-sm.webp'));

console.log('Optimized portrait images written to public/images/');
