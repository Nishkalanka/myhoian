// netlify/functions/getCategories.ts

// Для локальной разработки, чтобы .env работал
import 'dotenv/config';

import { Client } from 'pg';
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

// Определяем интерфейсы для типов данных, которые мы ожидаем
interface Category {
  id: number;
  name: Record<string, string>; // JSONB поле для мультиязычных названий
  slug: string;
}

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  let client: Client | undefined; // Объявляем client здесь, чтобы он был доступен в блоке finally

  try {
    // Проверяем, что метод запроса GET
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    const DATABASE_URL = process.env.DATABASE_URL;

    if (!DATABASE_URL) {
      console.error(
        'DATABASE_URL is not set in Netlify environment variables.'
      );
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Database URL is not configured.' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    client = new Client({
      connectionString: DATABASE_URL,
      ssl: {
        // В продакшене Netlify, rejectUnauthorized должен быть true или удален.
        // Для локальной разработки может потребоваться false.
        rejectUnauthorized: false,
      },
    });

    await client.connect();
    console.log('Successfully connected to PostgreSQL from Netlify Function.');

    // Выполняем запрос для получения всех категорий
    const result = await client.query<Category>(
      'SELECT id, name, slug FROM categories ORDER BY id ASC'
    );
    const categories: Category[] = result.rows.map((row) => ({
      id: row.id,
      name: row.name,
      slug: row.slug,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(categories),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (error: any) {
    // Используем 'any' для простоты обработки ошибок
    console.error('Error fetching categories:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to fetch categories',
        error: error.message,
      }),
      headers: { 'Content-Type': 'application/json' },
    };
  } finally {
    // Важно: закрываем соединение с базой данных
    if (client) {
      await client.end();
      console.log('Disconnected from PostgreSQL.');
    }
  }
};
