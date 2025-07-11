// src/locales/ru/translation.ts
import type { TranslationContent } from '../types.js';

const translationRU: TranslationContent = {
  logoTitle: 'Мой Хойан',
  moreDetails: 'Подробнее',
  details: 'Детали',
  category: 'Категория',
  description: 'Описание',
  youAreHere: 'Вы здесь',
  close: 'Закрыть',
  noDetailsAvailable: 'Подробности по данному объекту отсутствуют.',
  welcomeMessage: 'Добро пожаловать в Хойан!',
  noMarkers: 'Выберите существующий маркер на карте',
  swiperWelcomeTitle: 'Привет!',
  swiperWelcomeSubtitle: 'Пожалуйста, выберите маркер на карте.',
  welcomeDialogTitle: 'Путешественник!',
  welcomeDialogMessage: 'Спасибо, что ты с нами!',
  thankYouMessage:
    'Этот путеводитель ещё только начинает свой путь, но будет расти и становиться лучше благодаря твоим отзывам и предложениям!',
  welcomeClose: 'Закрыть',

  // Новые строки для запроса местоположения
  locationPermissionTitle: 'Разрешение на доступ к местоположению',
  locationPermissionExplanation:
    'Для лучшего отображения достопримечательностей на карте нам требуется доступ к вашему текущему местоположению. Это поможет показать объекты рядом с вами.',
  locationPermissionNote:
    'Ваше местоположение не будет сохранено или передано третьим лицам.',
  allow: 'Разрешить',
  deny: 'Отклонить',
  findMyPosition: 'Найти моё местоположение',
  geolocationError: 'Произошла ошибка при получении местоположения.',
  userDeniedLocation:
    'Пользователь отклонил запрос на определение местоположения. Пожалуйста, разрешите доступ в настройках браузера.',
  locationUnavailable: 'Информация о местоположении недоступна.',
  locationTimeout: 'Истекло время ожидания при получении местоположения.',
  unknownLocationError:
    'Произошла неизвестная ошибка при получении местоположения.',

  footer: {
    copyright: 'Все права защищены.',
  },
  categories: {
    museum: 'Музеи',
    'food-drinks': 'Еда и напитки',
    'art-galleries': 'Арт-галереи',
  },
};

export default translationRU;
