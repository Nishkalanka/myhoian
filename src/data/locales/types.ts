// src/locales/types.ts

export interface TranslationContent {
  logoTitle: string;
  moreDetails: string;
  details: string;
  category: string;
  description: string;
  youAreHere: string;
  close: string;
  noDetailsAvailable: string;
  swiperWelcomeTitle: string;
  swiperWelcomeSubtitle: string;
  welcomeDialogTitle: string;
  welcomeDialogMessage: string;
  thankYouMessage: string;
  welcomeClose: string;

  // --- НОВЫЕ КЛЮЧИ ДЛЯ МЕСТОПОЛОЖЕНИЯ ---
  locationPermissionTitle: string;
  locationPermissionExplanation: string;
  locationPermissionNote: string;
  allow: string;
  deny: string;
  findMyPosition: string;
  geolocationError: string;
  userDeniedLocation: string;
  locationUnavailable: string;
  locationTimeout: string;
  unknownLocationError: string;
  welcomeMessage: string;
  noMarkers: string;
  // --- КОНЕЦ НОВЫХ КЛЮЧЕЙ ---

  footer: {
    copyright: string;
  };
}
