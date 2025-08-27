import type { Landmark, LandmarkContent } from '../data';

/**
 * Returns localized content for a landmark based on the provided language.
 * Falls back to English if the requested language content is not available.
 *
 * @param landmark The landmark object.
 * @param lang The language code (e.g., 'ru', 'en').
 * @returns The localized content.
 */
export const getLocalizedContentForLandmark = (
  landmark: Landmark,
  lang: string
): LandmarkContent => {
  if (lang === 'ru' && landmark.ru) {
    return landmark.ru;
  }
  if (lang === 'es' && landmark.es) {
    return landmark.es;
  }
  if (lang === 'fr' && landmark.fr) {
    return landmark.fr;
  }
  if (lang === 'vn' && landmark.vn) {
    return landmark.vn;
  }
  // По умолчанию возвращаем английскую версию
  return landmark.en;
};
