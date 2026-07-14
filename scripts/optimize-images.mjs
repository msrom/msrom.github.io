import { access } from 'node:fs/promises';
import { constants } from 'node:fs';
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const input = path.join(root, 'Foto CV.jpg');
const outputDir = path.join(root, 'public/images');
const portrait = path.join(outputDir, 'portrait.webp');
const portraitSm = path.join(outputDir, 'portrait-sm.webp');

async function exists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

await mkdir(outputDir, { recursive: true });

const hasInput = await exists(input);
const hasOutputs = (await exists(portrait)) && (await exists(portraitSm));

if (!hasInput) {
  if (hasOutputs) {
    console.log('Source photo not found; using committed portrait images in public/images/.');
    process.exit(0);
  }

  console.error(
    'Missing Foto CV.jpg and no committed portrait.webp/portrait-sm.webp found.\n' +
      'Add the source photo locally or commit optimized portraits to public/images/.',
  );
  process.exit(1);
}

await sharp(input)
  .resize(960, null, { withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(portrait);

await sharp(input)
  .resize(480, null, { withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(portraitSm);

console.log('Optimized portrait images written to public/images/');
