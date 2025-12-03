// src/shared/lib/imagePaths.ts

export const fullDescriptionImageMap: Record<string, string> = {};

// Glob для поиска картинок
const modules = import.meta.glob(
  '../../assets/img/pictures/*.{png,jpeg,jpg,gif,webp,svg}',
  { eager: true }
);

// console.log('🔍 [imagePaths] Glob modules found:', Object.keys(modules).length);

for (const path in modules) {
  const fileName = path.split('/').pop();
  const moduleContent = modules[path];

  if (!fileName) continue;

  let url: string | undefined;

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
    continue;
  }

  if (url) {
    // ✅ ИСПРАВЛЕНО: Преобразуем абсолютный путь в правильный
    const fixedUrl = url.replace(/^\/src\/assets/, '');
    fullDescriptionImageMap[fileName] = fixedUrl;
    // console.log(`✅ [imagePaths] Mapped: ${fileName} → ${fixedUrl}`);
  }
}

// ✅ Логи ВНЕ цикла!
// console.log(
//   '✅ [imagePaths] Final Map Size:',
//   Object.keys(fullDescriptionImageMap).length
// );
// console.log('✅ [imagePaths] Keys:', Object.keys(fullDescriptionImageMap));
