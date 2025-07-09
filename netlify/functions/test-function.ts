// netlify/functions/test-function.ts
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  console.log('Test function was called!'); // Этот лог появится в терминале netlify dev
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from test function!',
      timestamp: new Date().toISOString(),
    }),
    headers: { 'Content-Type': 'application/json' },
  };
};
