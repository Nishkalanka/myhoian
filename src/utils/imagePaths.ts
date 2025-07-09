// src/utils/imagePaths.ts

export const fullDescriptionImageMap: Record<string, string> = {};

// Этот glob УЖЕ корректно смотрит в src/assets/img/pictures/
// где, согласно твоему скриншоту, находятся все нужные изображения.
const modules = import.meta.glob(
  '../assets/img/pictures/*.{png,jpeg,jpg,gif,webp,svg}',
  { eager: true }
);

// console.log('Modules found by glob in imagePaths.ts:', modules); // Раскомментируй для отладки

for (const path in modules) {
  const fileName = path.split('/').pop() as string;
  const moduleContent = modules[path];

  if (
    moduleContent &&
    typeof moduleContent === 'object' &&
    'default' in moduleContent
  ) {
    fullDescriptionImageMap[fileName] = (moduleContent as any).default;
  } else {
    console.warn(
      `Warning: Module for ${fileName} did not have a 'default' export. Path: ${path}`,
      moduleContent
    );
  }
}

// console.log('Final fullDescriptionImageMap contents:', fullDescriptionImageMap); // Раскомментируй для отладки
