import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const INPUT_DIR = path.resolve('media-raw');
const OUTPUT_DIR = path.resolve('media-out');
const PUBLIC_BASE_URL = 'https://media.bluemesito.com'; // subdominio Cloudflare R2

const GALLERY_CATEGORIES = ['fanarts', 'illustrations', 'logos', 'pets', 'sketches'];
const VALID_EXT = new Set(['.webp', '.png', '.jpg', '.jpeg']);

// Convierte nombres de archivo como "mega_Altaria_high.webp" -> "Mega Altaria"
function formatTitle(filename) {
  return path.parse(filename).name
    .replace(/_high$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

async function processFolder(relativeDir = '') {
  const currentInput = path.join(INPUT_DIR, relativeDir);
  const entries = await fs.readdir(currentInput, { withFileTypes: true });
  const items = [];

  for (const entry of entries) {
    const relPath = path.join(relativeDir, entry.name);

    if (entry.isDirectory()) {
      await processFolder(relPath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!VALID_EXT.has(ext)) continue;

    const baseName = path.parse(entry.name).name;
    const inputFile = path.join(INPUT_DIR, relPath);
    const outFolder = path.join(OUTPUT_DIR, relativeDir);
    await fs.mkdir(outFolder, { recursive: true });

    const thumbFile = path.join(outFolder, `${baseName}-thumbnail.webp`);
    const fullFile = path.join(outFolder, `${baseName}-full.webp`);

    // 1. Generar Thumbnail (ancho máx 600px, calidad 78)
    await sharp(inputFile)
      .resize({ width: 600, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(thumbFile);

    // 2. Generar Full HD (ancho máx 1800px, calidad 85)
    await sharp(inputFile)
      .resize({ width: 1800, withoutEnlargement: true })
      .webp({ quality: 85, effort: 5 })
      .toFile(fullFile);

    // Leer dimensiones finales para evitar saltos de diseño (CLS)
    const { width = 800, height = 800 } = await sharp(fullFile).metadata();
    const urlDir = relativeDir.split(path.sep).join('/');

    items.push({
      title: formatTitle(entry.name),
      alt: formatTitle(entry.name),
      thumbnailUrl: `${PUBLIC_BASE_URL}/${urlDir}/${baseName}-thumbnail.webp`,
      fullUrl: `${PUBLIC_BASE_URL}/${urlDir}/${baseName}-full.webp`,
      width,
      height,
    });

    console.log(`✔ Procesado: ${urlDir}/${baseName}`);
  }

  // Si es una categoría de galería, guardamos sus items para el catálogo
  if (GALLERY_CATEGORIES.includes(relativeDir)) {
    catalog[relativeDir] = items.map((item, idx) => ({
      id: `${relativeDir}-${idx + 1}`,
      ...item,
    }));
  }
}

const catalog = {};
await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
await processFolder();

await fs.writeFile(
  path.join(OUTPUT_DIR, 'catalog.json'),
  JSON.stringify(catalog, null, 2),
  'utf-8'
);

console.log('\n✅ Optimización completa. Archivos listos en ./media-out');