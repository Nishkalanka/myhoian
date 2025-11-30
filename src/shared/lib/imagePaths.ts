// src/shared/lib/imagePaths.ts

export const fullDescriptionImageMap: Record<string, string> = {};

// Glob для поиска картинок. Путь корректный:
// src/shared/lib/ -> ../../assets/img/pictures/
const modules = import.meta.glob(
  '../../assets/img/pictures/*.{png,jpeg,jpg,gif,webp,svg}',
  { eager: true }
);

console.log('🔍 [imagePaths] Glob modules found:', Object.keys(modules).length);

for (const path in modules) {
  // Получаем имя файла (например, "21.jpg")
  const fileName = path.split('/').pop();
  const moduleContent = modules[path];

  if (!fileName) continue;

  let url: string | undefined;

  // Пытаемся достать URL разными способами, чтобы угодить Vite
  if (typeof moduleContent === 'string') {
    url = moduleContent;
  } else if (
    moduleContent &&
    typeof moduleContent === 'object' &&
    'default' in moduleContent
  ) {
    // @ts-expect-error: Module structure varies in Vite glob import
    url = moduleContent.default;
  } else {
    console.warn(
      `⚠️ [imagePaths] Unknown module format for ${fileName}:`,
      moduleContent
    );
  }

  if (url) {
    fullDescriptionImageMap[fileName] = url;
  }
}

//console.log('✅ [imagePaths] Final Map Size:', Object.keys(fullDescriptionImageMap).length);
// Раскомментируй, если нужно увидеть список всех загруженных файлов:
// console.log('✅ [imagePaths] Keys:', Object.keys(fullDescriptionImageMap));
