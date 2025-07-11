// src/locales/fr/translation.ts
import type { TranslationContent } from '../types.js';

const translationFR: TranslationContent = {
  logoTitle: 'Mon Hội An',
  moreDetails: 'Plus de détails',
  details: 'Détails',
  category: 'Catégorie',
  description: 'Description',
  youAreHere: 'Vous êtes ici',
  close: 'Fermer',
  noDetailsAvailable: 'Aucun détail disponible pour cet objet.',
  welcomeMessage: 'Bonjour ! Bienvenue à Hội An!',
  noMarkers: 'Sélectionnez un marqueur existant ',
  swiperWelcomeTitle: 'Bonjour!',
  swiperWelcomeSubtitle: 'Veuillez sélectionner un marqueur sur la carte.',
  welcomeDialogTitle: 'Voyageur !', // Из нашей последней беседы
  welcomeDialogMessage: "Merci d'être avec nous !", // Из нашей последней беседы
  thankYouMessage:
    "Ce guide ne fait que commencer son voyage, mais il grandira et s'améliorera grâce à tes retours et suggestions !", // Из нашей последней беседы
  welcomeClose: 'Fermer',

  // Nouvelles lignes pour la demande de localisation
  locationPermissionTitle: "Autorisation d'accès à la localisation",
  locationPermissionExplanation:
    "Pour une meilleure affichage des sites touristiques sur la carte, nous avons besoin d'accéder à votre position actuelle. Cela aidera à montrer les objets près de chez vous.",
  locationPermissionNote:
    'Votre position ne sera ni sauvegardée ni partagée avec des tiers.',
  allow: 'Autoriser',
  deny: 'Refuser',
  findMyPosition: 'Trouver ma position',
  geolocationError:
    "Une erreur est survenue lors de l'obtention de la localisation.",
  userDeniedLocation:
    "L'utilisateur a refusé la demande de localisation. Veuillez autoriser l'accès dans les paramètres du navigateur.",
  locationUnavailable:
    'Les informations de localisation ne sont pas disponibles.',
  locationTimeout: "Le délai d'attente pour obtenir la localisation a expiré.",
  unknownLocationError:
    "Une erreur inconnue est survenue lors de l'obtention de la localisation.",

  footer: {
    copyright: 'Tous droits réservés.',
  },
  categories: {
    museum: 'Musées',
    'food-drinks': 'Aliments et Boissons',
    'art-galleries': 'Art',
  },
};

export default translationFR;
