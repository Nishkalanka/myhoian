// src/utils/urlUtils.ts

export function createSlug(title: string): string {
  // Проверяем, что title является строкой
  if (typeof title !== 'string') {
    console.warn('createSlug received non-string title:', title);
    return ''; // Возвращаем пустую строку или выбрасываем ошибку
  }
  return title
    .toLowerCase() // Все в нижний регистр
    .replace(/[^a-z0-9\s-]/g, '') // Удаляем все, кроме букв, цифр, пробелов и дефисов
    .replace(/\s+/g, '-') // Заменяем пробелы на дефисы (один или несколько)
    .replace(/-+/g, '-') // Удаляем повторяющиеся дефисы
    .replace(/^-+|-+$/g, ''); // Удаляем дефисы в начале и конце
}

// Эта функция может не понадобиться, если вы будете искать достопримечательность по ID или по slug
// Но оставлю для примера
export function getTitleFromSlug(slug: string): string {
  if (typeof slug !== 'string') {
    console.warn('getTitleFromSlug received non-string slug:', slug);
    return '';
  }
  return slug
    .replace(/-/g, ' ') // Заменяем дефисы на пробелы
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Каждое слово с заглавной буквы
    .join(' ');
}
