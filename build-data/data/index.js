// src/data/index.ts
// !!! ИСПРАВЛЕНО !!! Удалили лишний " = "
import { ruLandmarkData } from './landmarks/ru/data.js';
import { enLandmarkData } from './landmarks/en/data.js';
import { esLandmarkData } from './landmarks/es/data.js';
import { frLandmarkData } from './landmarks/fr/data.js'; // <-- ИСПРАВЛЕНО ЗДЕСЬ
import { vnLandmarkData } from './landmarks/vn/data.js'; // <-- ИСПРАВЛЕНО ЗДЕСЬ
// Общие данные для всех достопримечательностей
const commonLandmarkData = [
  {
    id: 1,
    coordinates: [15.877085241922142, 108.32607252520863],
    imageUrl: '1.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 2,
    coordinates: [15.877163919401717, 108.32656453748291],
    imageUrl: '4.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 3,
    coordinates: [15.877192666189272, 108.32580213522836],
    imageUrl: '5.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 4,
    coordinates: [15.87704368050044, 108.32639856615955],
    imageUrl: '6.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 5,
    coordinates: [15.87707775863468, 108.32732456770708],
    imageUrl: '7.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 6,
    coordinates: [15.877217250634457, 108.32778745447276],
    imageUrl: '8.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 7,
    coordinates: [15.876489569876702, 108.3278160916573],
    imageUrl: '9.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 8,
    coordinates: [15.877129405049136, 108.32922176082465],
    imageUrl: '10.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  //Museum of Trade Ceramics
  {
    id: 9,
    coordinates: [15.877309598047407, 108.32955721501571],
    imageUrl: '11.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  //Museum of Local Products
  {
    id: 10,
    coordinates: [15.877191556757882, 108.32980266137943],
    imageUrl: '12.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  //Chinese Assembly Hall of Hoi An
  {
    id: 11,
    coordinates: [15.877403269227202, 108.33002096101748],
    imageUrl: '13.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  //Fujian Assembly Hall
  {
    id: 12,
    coordinates: [15.877490346478194, 108.33063360234465],
    imageUrl: '14.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 13,
    coordinates: [15.877546927531316, 108.33137235169579],
    imageUrl: '15.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 14,
    coordinates: [15.876674888390227, 108.32985412114168],
    imageUrl: '16.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 15,
    coordinates: [15.876525159568713, 108.3298504834374],
    imageUrl: '17.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 16,
    coordinates: [15.877647604389802, 108.33200578046446],
    imageUrl: '18.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
  {
    id: 17,
    coordinates: [15.877141685034902, 108.33427013425388],
    imageUrl: '48.jpg', // Это основное изображение достопримечательности
    category: 'historical',
  },
];
// Функция для объединения данных
// Мы расширим типы, чтобы позволить опциональные языковые данные
function combineLandmarkData(common, ruData, enData, esData, frData, vnData) {
  const combinedLandmarks = [];
  common.forEach((commonItem) => {
    const ruContent = ruData.find((item) => item.id === commonItem.id);
    const enContent = enData.find((item) => item.id === commonItem.id);
    const esContent = esData.find((item) => item.id === commonItem.id);
    const frContent = frData.find((item) => item.id === commonItem.id);
    const vnContent = vnData.find((item) => item.id === commonItem.id);
    // Обязательная проверка для RU и EN, так как они сейчас используются как основа
    if (ruContent && enContent) {
      combinedLandmarks.push({
        ...commonItem,
        ru: ruContent,
        en: enContent,
        // Здесь мы явно указываем, что эти свойства могут быть undefined
        es: esContent,
        fr: frContent,
        vn: vnContent,
      });
    } else {
      console.warn(
        `Missing essential RU or EN localized content for landmark ID: ${commonItem.id}. This landmark will be skipped.`
      );
    }
  });
  return combinedLandmarks;
}
// Измените этот экспорт, чтобы включить все языки в combineLandmarkData
export const hoiAnLandmarks = combineLandmarkData(
  commonLandmarkData,
  ruLandmarkData,
  enLandmarkData,
  esLandmarkData, // Добавляем испанские данные
  frLandmarkData, // Добавляем французские данные
  vnLandmarkData // Добавляем вьетнамские данные
);
