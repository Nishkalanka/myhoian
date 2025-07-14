// src/data/landmarks/categoryConstants.ts

interface Category {
  id: number;
  name: Record<string, string>; // Мультиязычное название
  slug: string;
}

export const ALL_CATEGORIES: Category[] = [
  {
    id: 1,
    name: {
      en: 'Museums',
      ru: 'Музеи',
      es: 'Museos',
      fr: 'Musées',
      vn: 'Bảo tàng',
    },
    slug: 'museum',
  },
  {
    id: 2,
    name: {
      en: 'Food & Drinks',
      ru: 'Еда и Напитки',
      es: 'Comida y Bebidas',
      fr: 'Aliments et Boissons',
      vn: 'Ẩm thực & Đồ uống',
    },
    slug: 'food-drinks',
  },
  {
    id: 3,
    name: {
      en: 'Art / Galleries',
      ru: 'Искусство / Галереи',
      es: 'Arte / Galerías',
      fr: 'Art / Galeries',
      vn: 'Nghệ thuật / Phòng trưng bày',
    },
    slug: 'art-galleries',
  },
  {
    id: 4,
    name: {
      en: 'Clubs',
      ru: 'Клубы', // <-- Не забудь перевести на русский!
      es: 'Clubs',
      fr: 'Clubs',
      vn: 'Câu lạc bộ',
    },
    slug: 'clubs',
  },
];

export const ALL_CATEGORY_SLUGS = ALL_CATEGORIES.map((cat) => cat.slug);
