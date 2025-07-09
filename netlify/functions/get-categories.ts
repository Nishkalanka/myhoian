// netlify/functions/get-categories.ts
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { Pool } from 'pg'; // Убедитесь, что у вас установлен 'pg' (npm install pg)

// Важно: Строка подключения к вашей базе данных Neon Tech.
// Эту переменную НИКОГДА не храните напрямую в коде!
// Она должна быть в переменных окружения Netlify (DATABASE_URL)
// Для локальной разработки используйте файл .env или netlify dev --env.DATABASE_URL="..."
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Раскомментируйте, если есть проблемы с SSL
  },
});

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  try {
    // ИЗМЕНЕННЫЙ SQL-ЗАПРОС:
    // Теперь мы выбираем столбец 'name' как JSONB и 'slug'
    const result = await pool.query('SELECT id, name, slug FROM categories');

    // ИЗМЕНЕННЫЙ МАППИНГ ДАННЫХ:
    // row.name теперь является JSONB объектом, который мы напрямую присваиваем
    const categories = result.rows.map((row) => ({
      id: row.id,
      name: row.name, // row.name уже является объектом { en: "...", ru: "..." }
      slug: row.slug,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(categories),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (error: any) {
    console.error('Error fetching categories from DB:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to fetch categories from database',
        details: error.message,
        stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined,
      }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
