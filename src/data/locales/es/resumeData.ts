// src/locales/ru/translation.ts
import type { TranslationContent } from '../types.js';

const translationES: TranslationContent = {
  logoTitle: 'Mi Hoi An',
  moreDetails: 'Más detalles',
  details: 'Detalles',
  category: 'Categoría',
  description: 'Descripción',
  youAreHere: 'Estás aquí',
  close: 'Cerrar',
  noDetailsAvailable: 'No hay detalles disponibles para este objeto.',
  welcomeMessage: '¡Hola! ¡Bienvenido a Hoi An!',
  noMarkers: 'Selecciona un marcador existente en el mapa',
  swiperWelcomeTitle: '¡Hola!',
  swiperWelcomeSubtitle: 'Por favor, selecciona un marcador en el mapa',
  welcomeDialogTitle: '¡Viajero!',
  welcomeDialogMessage: '¡Gracias por estar con nosotros!',
  thankYouMessage:
    'Esta guía apenas comienza su camino, pero crecerá y mejorará gracias a tus comentarios y sugerencias.',
  welcomeClose: 'Cerrar',

  // Nuevas líneas para solicitud de ubicación
  locationPermissionTitle: 'Permiso de acceso a la ubicación',
  locationPermissionExplanation:
    'Para una mejor visualización de las atracciones en el mapa, necesitamos acceso a su ubicación actual. Esto ayudará a mostrar los objetos cercanos a usted.',
  locationPermissionNote:
    'Su ubicación no será guardada ni compartida con terceros.',
  allow: 'Permitir',
  deny: 'Denegar',
  findMyPosition: 'Encontrar mi posición',
  geolocationError: 'Ocurrió un error al obtener la ubicación.',
  userDeniedLocation:
    'El usuario denegó la solicitud de ubicación. Por favor, permita el acceso en la configuración del navegador.',
  locationUnavailable: 'Información de ubicación no disponible.',
  locationTimeout: 'Tiempo de espera agotado al obtener la ubicación.',
  unknownLocationError: 'Ocurrió un error desconocido al obtener la ubicación.',

  footer: {
    copyright: 'Todos los derechos reservados.',
  },
  categories: {
    museum: 'Museos',
    'food-drinks': 'Comida y Bebidas',
    'art-galleries': 'Arte',
  },
};

export default translationES;
