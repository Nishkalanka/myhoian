import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  lazy,
  Suspense,
} from 'react';
import './index.css';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

// Синхронные импорты (Критичные для отрисовки)
import Header from './widgets/header/ui/Header';
// import { MapComponent } from './widgets/map/ui/MapComponent'; // <-- REMOVED
import { MapContainer } from './widgets/map/ui/MapContainer';
import { MapProvider } from './entities/map/model/MapContext';
import { AppSnackbar } from './shared/ui/AppSnackbar';
import { useSnackbar } from './shared/lib/useSnackbar';
import Footer from './widgets/footer/ui/Footer';

// Данные и типы
import { fetchAllLandmarks } from './data/asyncData';
import {
  type Landmark,
  type CategorySlug,
  type LandmarkContent,
} from './entities/landmark/model/landmarkTypes';
import type { LocalizedLandmark } from './entities/landmark/model/landmarkTypes.js';
import type { ShowSnackbarFn } from './features/user-location/ui/UserLocationButton.js';

// 🚀 ОПТИМИЗАЦИЯ: Ленивая загрузка HeroSection
// Это ускоряет Initial Paint
const HeroSection = lazy(() => import('./widgets/hero/ui/HeroSection'));

// 🚀 ОПТИМИЗАЦИЯ: Ленивая загрузка MapComponent
// Загружаем код карты только когда она действительно нужна (или в фоне)
const MapComponent = lazy(() =>
  import('./widgets/map/ui/MapComponent').then((module) => ({
    default: module.MapComponent,
  }))
);

function AppContent() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { slug: urlSlug, lang: urlLang } = useParams<{
    slug: string;
    lang: string;
  }>();

  // 🚀 ОПТИМИЗАЦИЯ: Асинхронная загрузка данных
  const [landmarks, setLandmarks] = useState<Landmark[]>([]);

  useEffect(() => {
    fetchAllLandmarks().then((data) => {
      setLandmarks(data);
    });
  }, []);

  const {
    openSnackbar,
    snackbarMessage,
    snackbarType,
    handleOpenSnackbar,
    handleCloseSnackbar,
  } = useSnackbar();

  const [selectedCategorySlugs, setSelectedCategorySlugs] = useState<string[]>([
    'museum',
    'food-drinks',
    'art-galleries',
    'clubs',
    'shops',
  ]);

  const handleCategorySelection = useCallback(
    (selectedSlugs: string[]) => setSelectedCategorySlugs(selectedSlugs),
    []
  );

  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>(
    []
  );
  const [isRouteVisible, setIsRouteVisible] = useState<boolean>(true);
  const toggleRouteVisibility = useCallback(
    () => setIsRouteVisible((prev) => !prev),
    []
  );

  useEffect(() => {
    setRouteCoordinates([]);

    // Remove initial preloader
    const preloader = document.getElementById('initial-preloader');
    if (preloader) {
      // Add class to trigger fade out
      document.body.classList.add('loaded');

      // Remove element after transition completes
      setTimeout(() => {
        preloader.remove();
      }, 600);
    }
  }, []);

  const getLocalizedContentForLandmark = useCallback(
    (landmark: Landmark): LandmarkContent => {
      const lang = i18n.language as keyof Pick<
        Landmark,
        'ru' | 'en' | 'es' | 'fr' | 'vn'
      >;
      return landmark[lang] || landmark.en;
    },
    [i18n.language]
  );

  const getLocalizedContentForLandmarkRef = useRef(
    getLocalizedContentForLandmark
  );
  useEffect(() => {
    getLocalizedContentForLandmarkRef.current = getLocalizedContentForLandmark;
  }, [getLocalizedContentForLandmark]);

  const localizedFilteredLandmarks: LocalizedLandmark[] = useMemo(() => {
    const baseFilteredLandmarks = landmarks.filter((landmark) =>
      (landmark.category as CategorySlug[]).some((category) =>
        selectedCategorySlugs.includes(category)
      )
    );
    return baseFilteredLandmarks.map((landmark) => ({
      ...landmark,
      localizedContent: getLocalizedContentForLandmark(landmark),
    }));
  }, [selectedCategorySlugs, getLocalizedContentForLandmark, landmarks]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasInteractedWithMarkers, setHasUserInteracted] = useState(false);

  const handleMapMarkerClick = useCallback(
    (index: number) => {
      const landmark = localizedFilteredLandmarks[index];
      if (!landmark) return;
      setActiveIndex(index);
      setHasUserInteracted(true);
      const currentLanguage = i18n.language as keyof typeof landmark.slug;
      const slug = landmark.slug[currentLanguage];
      if (slug) {
        navigate(`/${i18n.language}/${slug}`, { replace: true });
      }
    },
    [
      setActiveIndex,
      setHasUserInteracted,
      localizedFilteredLandmarks,
      navigate,
      i18n.language,
    ]
  );

  const handleMapClick = useCallback(() => {
    if (i18n.isInitialized) {
      handleOpenSnackbar(t('swiperWelcomeSubtitle'), 'info');
    }
    setActiveIndex(null);
    navigate('/', { replace: true });
  }, [handleOpenSnackbar, t, i18n.isInitialized, navigate]);

  useEffect(() => {
    if (urlSlug && localizedFilteredLandmarks.length > 0) {
      const foundIndex = localizedFilteredLandmarks.findIndex((landmark) => {
        const slugs = Object.values(landmark.slug);
        return slugs.some(
          (slug) => slug?.toLowerCase() === urlSlug.toLowerCase()
        );
      });
      if (foundIndex !== -1) {
        setActiveIndex(foundIndex);
        setHasUserInteracted(true);
      } else {
        setActiveIndex(null);
      }
    } else {
      setActiveIndex(null);
    }
  }, [urlSlug, localizedFilteredLandmarks, i18n.language]);

  useEffect(() => {
    if (urlLang && i18n.language !== urlLang) {
      i18n.changeLanguage(urlLang);
    }
  }, [urlLang, i18n]);

  return (
    <>
      <Helmet>
        <title>Интерактивная Карта Хойана | Достопримечательности Хойана</title>
        <meta
          name="description"
          content="Путеводитель по Хойану. Интерактивная карта, избранные места, еда, музеи и галереи."
        />
        <meta
          name="keywords"
          content="Хойан, карта, достопримечательности, Вьетнам, маршруты, еда, туризм, MyHoiAn"
        />
        <meta name="author" content="MyHoiAn" />
        <link
          rel="canonical"
          href={`https://myhoian.app${window.location.pathname}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://myhoian.app${window.location.pathname}`}
        />
        <meta
          property="og:title"
          content="Интерактивная Карта Хойана 2026 | Достопримечательности и Маршруты"
        />
        <meta property="og:description" content="Путеводитель по Хойану..." />
        <meta property="og:image" content="https://myhoian.app/og-image.png" />
      </Helmet>

      <Box
        sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <Header
          onSelectCategories={handleCategorySelection}
          selectedCategorySlugs={selectedCategorySlugs}
          toggleRouteVisibility={toggleRouteVisibility}
          isRouteVisible={isRouteVisible}
        />

        {/* 🆕 MapProvider ОБЕРТКА для ленивой загрузки карты */}
        <MapProvider lazyLoad={true}>
          <Box
            sx={{
              flexGrow: 1,
              minHeight: 0,
              position: 'absolute',
              height: '100%',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            {/* Синхронный контейнер для инициализации карты */}
            <MapContainer />

            {/* Логика карты грузится лениво*/}
            <Suspense fallback={null}>
              <MapComponent
                landmarks={localizedFilteredLandmarks}
                activeIndex={activeIndex}
                onMapMarkerClick={handleMapMarkerClick}
                onMapClick={handleMapClick}
                routeCoordinates={routeCoordinates}
                hasUserInteracted={hasInteractedWithMarkers}
                isRouteVisible={isRouteVisible}
                onShowSnackbar={handleOpenSnackbar as ShowSnackbarFn}
                getLocalizedContentRef={getLocalizedContentForLandmarkRef}
              />
            </Suspense>
          </Box>
        </MapProvider>

        {/* Ленивая секция (грузится в фоне) */}
        <Suspense fallback={null}>
          <HeroSection
            key="hero-section"
            selectedCategorySlugs={selectedCategorySlugs}
            filteredLandmarks={localizedFilteredLandmarks}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setHasUserInteracted={setHasUserInteracted}
            hasInteractedWithMarkers={hasInteractedWithMarkers}
            getLocalizedContent={getLocalizedContentForLandmark}
            onShowSnackbar={handleOpenSnackbar as ShowSnackbarFn}
          />
        </Suspense>

        <AppSnackbar
          open={openSnackbar}
          message={snackbarMessage}
          type={snackbarType}
          onClose={handleCloseSnackbar}
        />
        <Footer />
      </Box>
    </>
  );
}

// 🆕 Главный App компонент (оборачиваем в MapProvider на уровне приложения)
function App() {
  return <AppContent />;
}

export default App;
