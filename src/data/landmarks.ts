// src/data/landmarks.ts

// Определение интерфейса для достопримечательности
export interface Landmark {
  id: string;
  name_ru: string; // Название на русском
  name_en: string; // Название на английском
  description_ru: string; // Описание на русском
  description_en: string; // Описание на английском
  coordinates: [number, number]; // [широта, долгота]
  imageUrl: string; // URL изображения
  category: 'historical' | 'food' | 'market' | 'nature' | 'craft' | 'other'; // Категория достопримечательности
}

// Данные о достопримечательностях Хойана
export const hoiAnLandmarks: Landmark[] = [
  {
    id: 'japanese-bridge',
    name_ru: 'Японский крытый мост (Chùa Cầu)',
    name_en: 'Japanese Covered Bridge (Chùa Cầu)',
    description_ru:
      'Знаменитый символ Хойана, построенный в 16 веке японской общиной. Содержит небольшой храм.',
    description_en:
      'Hoi An’s iconic symbol, built in the 16th century by the Japanese community. Features a small temple inside.',
    coordinates: [15.877085241922142, 108.32607252520863],
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Japanese_Covered_Bridge%2C_Hoi_An%2C_Vietnam.jpg/1280px-Japanese_Covered_Bridge%2C_Hoi_An%2C_Vietnam.jpg',
    category: 'historical',
  },
  {
    id: 'old-house-tan-ky',
    name_ru: 'Старинный дом Тан Ки',
    name_en: 'Old House of Tan Ky',
    description_ru:
      'Один из самых хорошо сохранившихся старых домов в Хойане, сочетающий японский, китайский и вьетнамский архитектурные стили.',
    description_en:
      'One of the best-preserved old houses in Hoi An, showcasing a blend of Japanese, Chinese, and Vietnamese architectural styles.',
    coordinates: [15.8778, 108.3284],
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Old_House_of_Tan_Ky.JPG/1280px-Old_House_of_Tan_Ky.JPG',
    category: 'historical',
  },
  {
    id: 'hoi-an-market',
    name_ru: 'Центральный рынок Хойана',
    name_en: 'Hoi An Central Market',
    description_ru:
      'Оживленный рынок, где можно купить свежие продукты, специи, сувениры и попробовать местную уличную еду.',
    description_en:
      'A bustling market where you can buy fresh produce, spices, souvenirs, and try local street food.',
    coordinates: [15.8753, 108.3323],
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Hoi_An_Market%2C_Quang_Nam%2C_Vietnam.jpg/1280px-Hoi_An_Market%2C_Quang_Nam%2C_Vietnam.jpg',
    category: 'market',
  },
  {
    id: 'assembly-hall-fujian',
    name_ru: 'Собрание Фуцзянь',
    name_en: 'Fujian Assembly Hall (Phuc Kien)',
    description_ru:
      'Красивый и богато украшенный храм, построенный китайскими торговцами из провинции Фуцзянь.',
    description_en:
      'A beautiful and richly decorated temple built by Chinese traders from Fujian province.',
    coordinates: [15.877, 108.3289],
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Fujian_Assembly_Hall.jpg/1280px-Fujian_Assembly_Hall.jpg',
    category: 'historical',
  },
  {
    id: 'hoi-an-roastery',
    name_ru: 'Hoi An Roastery (кафе)',
    name_en: 'Hoi An Roastery (cafe)',
    description_ru:
      'Популярное кафе, известное своим качественным вьетнамским кофе и уютной атмосферой.',
    description_en:
      'A popular cafe known for its quality Vietnamese coffee and cozy atmosphere.',
    coordinates: [15.8774, 108.3287],
    imageUrl:
      'https://images.unsplash.com/photo-1541167718912-70b13f1d387b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'food',
  },
];
