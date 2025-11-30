// src/shared/lib/usePictureUrl.ts
import { fullDescriptionImageMap } from './imagePaths';

console.log(
  'UsePictureUrl loaded map with keys:',
  Object.keys(fullDescriptionImageMap).length
);
// Если тут 0, значит карта пустая в момент вызова.

export const usePictureUrl = () => {
  return (name: string) => {
    const url = fullDescriptionImageMap[name];
    // console.log(`Get url for ${name}:`, url);
    return url;
  };
};
