import "dotenv/config"; // Загрузка переменных окружения из .env
import pg from "pg";
const { Client } = pg;
import path from "path"; // <-- ВОТ ЭТА СТРОКА БЫЛА ОТСУТСТВУЮЩЕЙ!
import fs from "fs";
import { fileURLToPath } from "url"; // Для __filename и __dirname в ES-модулях

// Определение __filename и __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env file.");
  process.exit(1);
}

const client = new Client({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

/**
 * Helper to generate a URL-friendly slug from text.
 * @param {string} text - The input text.
 * @returns {string} The generated slug.
 */
function generateSlug(text) {
  if (!text) return "";
  return text
    .toString()
    .normalize("NFD") // Normalize Unicode characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

async function migrateData() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL.");

    const allLanguages = ["ru", "en", "es", "fr", "vn"];

    // --- 1. Миграция категорий ---
    console.log("Migrating categories...");
    // Категории жестко закодированы, так как они фиксированы в LandmarkType
    const categoriesFromTypes = [
      "historical",
      "food",
      "market",
      "nature",
      "craft",
      "other",
      "museum",
    ];

    const categoryMap = {}; // Для маппинга slug -> id
    for (const catSlug of categoriesFromTypes) {
      if (catSlug) {
        // Создаем JSONB объект для названия категории (на английском)
        const nameJSONB = {
          en: catSlug.charAt(0).toUpperCase() + catSlug.slice(1),
        };
        // Вставляем или обновляем категорию в БД
        const res = await client.query(
          "INSERT INTO categories (name, slug) VALUES ($1, $2) ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name RETURNING id",
          [JSON.stringify(nameJSONB), catSlug]
        );
        categoryMap[catSlug] = res.rows[0].id;
        console.log(`  Processed category: ${catSlug} (ID: ${res.rows[0].id})`);
      }
    }
    console.log("Categories migration complete. Map:", categoryMap);

    // --- 2. Миграция маркеров ---
    console.log("Migrating markers...");

    let hoiAnLandmarksModule;
    try {
      // Путь должен быть относительным от места выполнения скрипта (MyHoiAn/)
      // до скомпилированного index.js: build-data/data/index.js
      hoiAnLandmarksModule = await import(
        path.join(__dirname, "..", "build-data", "data", "index.js")
      );
    } catch (importError) {
      console.error(
        "Failed to import data from build-data/data/index.js. Ensure you have compiled your data using `npx tsc --project tsconfig.data.json`:",
        importError
      );
      console.error(
        'Check your tsconfig.data.json: "outDir" should be "./build-data", and "include" should cover "src/**/*.ts". Also verify the actual build-data folder structure.'
      );
      process.exit(1);
    }
    const hoiAnLandmarks = hoiAnLandmarksModule.hoiAnLandmarks;

    console.log(`  Found ${hoiAnLandmarks.length} full landmark data entries.`);

    // Обходим каждую достопримечательность и вставляем/обновляем ее в БД
    for (const landmark of hoiAnLandmarks) {
      const id = landmark.id;
      const coordinates = landmark.coordinates || [0.0, 0.0];
      const imageUrl = landmark.imageUrl || null;
      const categorySlug = landmark.category;

      // Собираем мультиязычные поля (name, description, full_description) в JSONB
      const nameJSONB = {};
      const descriptionJSONB = {};
      const fullDescriptionJSONB = {};

      let primaryTitle = ""; // Используем для генерации slug
      for (const lang of allLanguages) {
        if (landmark[lang] && typeof landmark[lang] === "object") {
          nameJSONB[lang] = landmark[lang].title || "";
          descriptionJSONB[lang] = landmark[lang].description || "";
          fullDescriptionJSONB[lang] = landmark[lang].fullDescription || "";

          // Используем английский заголовок для slug, если доступен
          if (lang === "en" && landmark[lang].title) {
            primaryTitle = landmark[lang].title;
          }
        }
      }
      // Если английского заголовка нет, используем первый попавшийся или генерируем дефолтный
      if (!primaryTitle) {
        primaryTitle = Object.values(nameJSONB)[0] || `Landmark-${id}`;
      }

      const slug = generateSlug(primaryTitle);
      const latitude = coordinates[0];
      const longitude = coordinates[1];

      console.log(
        `  Processing landmark: ${primaryTitle} (ID: ${id}, Slug: ${slug})`
      );

      // Вставка/обновление записи в таблице markers
      const insertMarkerRes = await client.query(
        `INSERT INTO markers (id, name, description, full_description, latitude, longitude, image_url, slug, details)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                 ON CONFLICT (id) DO UPDATE SET
                    name = EXCLUDED.name,
                    description = EXCLUDED.description,
                    full_description = EXCLUDED.full_description,
                    latitude = EXCLUDED.latitude,
                    longitude = EXCLUDED.longitude,
                    image_url = EXCLUDED.image_url,
                    slug = EXCLUDED.slug,
                    details = EXCLUDED.details
                 RETURNING id`,
        [
          id,
          JSON.stringify(nameJSONB),
          JSON.stringify(descriptionJSONB),
          JSON.stringify(fullDescriptionJSONB),
          latitude,
          longitude,
          imageUrl ? `/images/${imageUrl}` : null, // Предполагаем, что изображения находятся в /public/images
          slug,
          null, // Детали пока не используются
        ]
      );
      const insertedMarkerId = insertMarkerRes.rows[0].id;
      console.log(`    Upserted marker (ID: ${insertedMarkerId})`);

      // Вставляем связь между маркером и его категорией в marker_categories
      if (categorySlug && categoryMap[categorySlug]) {
        await client.query(
          "INSERT INTO marker_categories (marker_id, category_id) VALUES ($1, $2) ON CONFLICT DO NOTHING",
          [insertedMarkerId, categoryMap[categorySlug]]
        );
        console.log(`    Linked marker ${slug} to category ${categorySlug}`);
      } else {
        console.warn(
          `    Could not link marker ${slug}: category '${categorySlug}' not found or invalid.`
        );
      }
    }
    console.log("Markers migration complete.");

    // --- 3. Миграция страниц (pages) ---
    console.log(
      "Pages migration (if any) placeholder. No data migrated for pages yet."
    );

    // --- 4. Мероприятия (events) ---
    console.log(
      "Events will be populated from Facebook API later. No data migrated for events yet."
    );
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await client.end();
    console.log("Disconnected from PostgreSQL.");
  }
}

// Запуск функции миграции
migrateData();
