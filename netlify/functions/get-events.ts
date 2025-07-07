// netlify/functions/get-events.ts

import { Pool, QueryResult } from 'pg';
import axios from 'axios';
import {
  Handler,
  HandlerEvent,
  HandlerContext,
  HandlerResponse,
} from '@netlify/functions';

// --- КОНСТАНТЫ И ID СТРАНИЦЫ ---
const FACEBOOK_GRAPH_API_VERSION = 'v19.0';
// !!! ВСТАВЬ СЮДА РЕАЛЬНЫЙ ID СВОЕЙ ТЕСТОВОЙ FACEBOOK-СТРАНИЦЫ !!!
const FACEBOOK_PAGE_ID = 'ТВОЙ_ID_ТЕСТОВОЙ_СТРАНИЦЫ_FACEBOOK';

// --- ИНТЕРФЕЙСЫ ДЛЯ ТИПИЗАЦИИ ОТВЕТА FACEBOOK API ---
// Минимальные поля для события, чтобы решить проблему 'unknown'
interface FacebookEvent {
  id: string;
  name: string;
  description?: string; // Описание может отсутствовать
  start_time: string;
  end_time?: string; // Может отсутствовать
  place?: {
    // Место может отсутствовать
    name: string;
    location?: {
      city?: string;
      country?: string;
      latitude?: number;
      longitude?: number;
      street?: string;
      zip?: string;
    };
  };
  cover?: {
    source: string;
  };
  picture?: {
    data: {
      url: string;
    };
  };
  ticket_uri?: string;
  event_times?: {
    start_time: string;
    end_time?: string;
  }[]; // Для повторяющихся событий
}

interface FacebookApiResponse {
  data: FacebookEvent[];
  paging?: {
    cursors?: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

// Инициализация пула подключений к БД
const pool = new Pool({
  connectionString: process.env.NETLIFY_DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Объявляем функцию-обработчик с указанием типов
const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
): Promise<HandlerResponse> => {
  try {
    // Проверяем наличие необходимых переменных окружения
    if (!process.env.FACEBOOK_PAGE_ACCESS_TOKEN) {
      throw new Error(
        'FACEBOOK_PAGE_ACCESS_TOKEN environment variable is not set.'
      );
    }
    if (
      !FACEBOOK_PAGE_ID ||
      FACEBOOK_PAGE_ID === 'ТВОЙ_ID_ТЕСТОВОЙ_СТРАНИЦЫ_FACEBOOK'
    ) {
      throw new Error(
        'FACEBOOK_PAGE_ID is not set or is still a placeholder. Please update get-events.ts.'
      );
    }

    // --- Шаг 1: Получение событий из Facebook Graph API ---
    const facebookApiUrl = `https://graph.facebook.com/${FACEBOOK_GRAPH_API_VERSION}/${FACEBOOK_PAGE_ID}/events`;

    console.log(`Fetching events from: ${facebookApiUrl}`);

    // Указываем тип ожидаемого ответа для axios
    const response = await axios.get<FacebookApiResponse>(facebookApiUrl, {
      params: {
        access_token: process.env.FACEBOOK_PAGE_ACCESS_TOKEN,
        fields:
          'id,name,description,start_time,end_time,place,cover,picture.type(large),ticket_uri,event_times',
        time_filter: 'upcoming',
        limit: 100,
      },
    });

    // Теперь TypeScript знает, что response.data имеет тип FacebookApiResponse
    const facebookEvents = response.data.data;

    // --- Шаг 2: Тестовое подключение к БД ---
    const client = await pool.connect();
    const dbPingResult: QueryResult<{ current_time: string }> =
      await client.query('SELECT NOW() as current_time');
    client.release();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Successfully fetched events from Facebook and pinged DB!',
        facebookEvents: facebookEvents,
        dbPingTime: dbPingResult.rows[0].current_time,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
  } catch (error: any) {
    console.error(
      'Error in get-events function:',
      error.response ? JSON.stringify(error.response.data) : error.message
    );

    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({
        message: 'Failed to fetch events from Facebook or connect to DB.',
        error: error.response ? error.response.data : error.message,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
  }
};

export { handler };
