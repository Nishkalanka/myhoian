import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { hoiAnLandmarks } from './src/data/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = resolve(__dirname, 'dist');
const BASE_URL = 'https://myhoian.app';
const LANGUAGES = ['en', 'ru', 'es', 'fr', 'vn'] as const;

const generateSitemap = () => {
  console.log('Generating sitemap...');
  const urls: string[] = [];

  // 1. Static Routes
  // Root
  urls.push(`${BASE_URL}/`);

  // Landing Page
  urls.push(`${BASE_URL}/hoian-avtorskaya-ekskursiya`);

  // 2. Dynamic Routes (Landmarks)
  // Route pattern: /:lang/:slug

  hoiAnLandmarks.forEach((landmark) => {
    LANGUAGES.forEach((lang) => {
      // Check if the landmark has content AND a slug for this language
      // We cast to any because TypeScript might not know for sure that 'lang' is a key of landmark
      // based on the complex union types usually involved in i18n
      const hasContent = (landmark as any)[lang] !== undefined;
      const slug = (landmark.slug as any)?.[lang];

      if (hasContent && slug) {
        urls.push(`${BASE_URL}/${lang}/${slug}`);
      }
    });
  });

  console.log(`Found ${urls.length} URLs.`);

  // 3. Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    return `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  // 4. Write to file
  if (!existsSync(DIST_DIR)) {
    mkdirSync(DIST_DIR, { recursive: true });
  }

  const outputPath = resolve(DIST_DIR, 'sitemap.xml');
  writeFileSync(outputPath, sitemap);
  console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
