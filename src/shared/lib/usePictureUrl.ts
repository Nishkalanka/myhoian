// src/shared/lib/usePictureUrl.ts

export const usePictureUrl = () => {
  return (name: string) => {
    if (!name) return undefined;

    // Если это URL (начинается с http или /), возвращаем как есть
    if (name.startsWith('http') || name.startsWith('/')) {
      return name;
    }

    // Иначе формируем путь к public/img/pictures
    return `/img/pictures/${name}`;
  };
};
