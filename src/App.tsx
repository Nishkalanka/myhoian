// src/App.tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './index.css';
import { Box } from '@mui/material';

import { LanguageProvider } from './contexts/LanguageContext';
import { MapProvider } from './contexts/MapContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { MapComponent } from './components/MapComponent'; // Импортируем MapComponent сюда
import { hoiAnLandmarks, type Landmark, type CategorySlug } from './data'; // Нужно для filteredLandmarks
import type { LocalizedLandmark } from './data/landmarks/landmarkTypes.js'; // Нужно для filteredLandmarks
import { useTranslation } from 'react-i18next'; // Нужно для filteredLandmarks

function App() {
  console.log('App: Render');

  const { t, i18n } = useTranslation(); // <-- Добавлен useTranslation в App

  const [selectedCategorySlugs, setSelectedCategorySlugs] = useState<string[]>([
    'museum',
    'food-drinks',
    'art-galleries',
    'clubs',
  ]);

  const handleCategorySelection = (selectedSlugs: string[]) => {
    setSelectedCategorySlugs(selectedSlugs);
  };

  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>(
    []
  );

  const [isRouteVisible, setIsRouteVisible] = useState<boolean>(true);

  const toggleRouteVisibility = useCallback(() => {
    setIsRouteVisible((prev) => !prev);
    console.log('App: Route visibility toggled to', !isRouteVisible);
  }, [isRouteVisible]);

  useEffect(() => {
    console.log('App: Mounted');
    setRouteCoordinates([
      [108.33179828107085, 15.87521631272881],
      [108.332203949894, 15.87531004402662],
      [108.33318597999323, 15.875130148544812],
      [108.33307482899937, 15.876236581779779],
      [108.33458097111202, 15.87645732752091],
      [108.33425316230614, 15.877918721988124],
      [108.33263343889013, 15.8776531248554],
      [108.33001062222235, 15.877318814399999],
      [108.32912423935835, 15.877138354967968],
    ]);
    return () => {
      console.log('App: Unmounted (Cleaning up)');
    };
  }, []);

  // Переносим filteredLandmarks в App, так как MapComponent теперь здесь
  const filteredLandmarks: LocalizedLandmark[] = useMemo(() => {
    const lang = i18n.language as keyof Pick<
      Landmark,
      'ru' | 'en' | 'es' | 'fr' | 'vn'
    >;

    const getLocalizedContent = (landmark: Landmark) => {
      if (lang === 'ru' && landmark.ru) return landmark.ru;
      if (lang === 'es' && landmark.es) return landmark.es;
      if (lang === 'fr' && landmark.fr) return landmark.fr;
      if (lang === 'vn' && landmark.vn) return landmark.vn;
      return landmark.en;
    };

    const landmarksToProcess = hoiAnLandmarks.filter((landmark) =>
      (landmark.category as CategorySlug[]).some((category) =>
        selectedCategorySlugs.includes(category)
      )
    );

    return landmarksToProcess.map((landmark) => ({
      ...landmark,
      localizedContent: getLocalizedContent(landmark),
    }));
  }, [selectedCategorySlugs, i18n.language]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Это состояние нужно будет пробросить в MapComponent
  const [hasInteractedWithMarkers, setHasUserInteracted] = useState(false); // И это

  const handleMapMarkerClick = useCallback(
    (index: number) => {
      // showSnackbar("", null); // Snackbar теперь в HeroSection, но вы можете его перенести
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        console.warn('Clicked marker with invalid index:', index);
        return;
      }
      setActiveIndex(index);
      // if (centerMap) { // centerMap теперь будет доступен через useMapContext в MapComponent
      //   centerMap([landmark.coordinates[1], landmark.coordinates[0]], 18);
      // }
      setHasUserInteracted(true);
    },
    [filteredLandmarks] // showSnackbar убран из зависимостей
  );

  const handleMapClick = useCallback(() => {
    // showSnackbar(t("noMarkers"), "info"); // Snackbar теперь в HeroSection
  }, []); // t и showSnackbar убраны из зависимостей

  return (
    <LanguageProvider>
      <MapProvider>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header
            onSelectCategories={handleCategorySelection}
            selectedCategorySlugs={selectedCategorySlugs}
            toggleRouteVisibility={toggleRouteVisibility}
            isRouteVisible={isRouteVisible}
          />

          <Box
            sx={{
              flexGrow: 1,
              minHeight: 0,
              position: 'absolute',
              height: '100%',
              width: '100%',
            }}
          >
            <MapComponent
              landmarks={filteredLandmarks}
              activeIndex={activeIndex}
              onMapMarkerClick={handleMapMarkerClick}
              onMapClick={handleMapClick}
              routeCoordinates={routeCoordinates}
              hasUserInteracted={hasInteractedWithMarkers}
              isRouteVisible={isRouteVisible}
            />
            {/* UserLocationButton тоже может быть перенесен сюда, если он должен жить с картой */}
            {/* <UserLocationButton
                centerMapFn={centerMap}
                onShowSnackbar={showSnackbar}
              /> */}
          </Box>

          {/* HeroSection теперь отвечает только за Swiper и другие UI элементы */}
          <HeroSection
            selectedCategorySlugs={selectedCategorySlugs}
            routeCoordinates={routeCoordinates} // Возможно, это больше не нужно HeroSection
            isRouteVisible={isRouteVisible} // Возможно, это больше не нужно HeroSection
            filteredLandmarks={filteredLandmarks} // Передаем сюда, так как она вычисляется в App
            activeIndex={activeIndex} // Передаем, чтобы Swiper мог отобразить активный индекс
            setActiveIndex={setActiveIndex} // Передаем сеттер, чтобы Swiper мог изменить активный индекс
            setHasUserInteracted={setHasUserInteracted} // Передаем сеттер
            hasInteractedWithMarkers={hasInteractedWithMarkers} // Передаем
          />
        </Box>
      </MapProvider>
    </LanguageProvider>
  );
}

export default App;
