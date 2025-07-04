// src/utils/imagePaths.ts

export const fullDescriptionImageMap: Record<string, string> = {};

const modules = import.meta.glob(
  '../assets/img/pictures/*.{png,jpeg,jpg,gif,webp,svg}',
  { eager: true }
);

// Этот лог показывает, что Vite успешно нашел файлы и генерирует для них хешированные пути в default:
// console.log('Modules found by glob in imagePaths.ts:', modules);

for (const path in modules) {
  const fileName = path.split('/').pop() as string;
  const moduleContent = modules[path];

  if (
    moduleContent &&
    typeof moduleContent === 'object' &&
    'default' in moduleContent
  ) {
    // Здесь moduleContent.default БУДЕТ:
    // - Локально (dev): "/src/assets/img/pictures/1.jpg"
    // - На Netlify (build): "/assets/1-Dm-bDWhg.jpg"
    fullDescriptionImageMap[fileName] = (moduleContent as any).default;
  } else {
    console.warn(
      `Warning: Module for ${fileName} did not have a 'default' export. Path: ${path}`,
      moduleContent
    );
  }
}

// Этот лог (в режиме dev) покажет пути из src/, что нормально для dev.
// console.log('Final fullDescriptionImageMap contents:', fullDescriptionImageMap);
