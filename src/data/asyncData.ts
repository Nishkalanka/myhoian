import type { Landmark } from '../entities/landmark/model/landmarkTypes';

export const fetchAllLandmarks = async (): Promise<Landmark[]> => {
  const [museums, foodDrinks, artGalleries, clubs] = await Promise.all([
    import('../entities/landmark/model/museums').then((m) => m.museumLandmarks),
    import('../entities/landmark/model/food-drinks').then(
      (m) => m.foodDrinksLandmarks
    ),
    import('../entities/landmark/model/art-galleries').then(
      (m) => m.artGalleriesLandmarks
    ),
    import('../entities/landmark/model/clubs').then((m) => m.clubsLandmarks),
  ]);

  return [...museums, ...foodDrinks, ...artGalleries, ...clubs];
};
