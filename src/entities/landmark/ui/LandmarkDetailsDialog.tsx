// src/entities/landmark/ui/LandmarkDetailsDialog.tsx

import React, { useCallback, useRef, useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Stack,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import type { Landmark, LandmarkContent } from '../../../data/index';
import { fullDescriptionImageMap } from '../../../shared/lib/imagePaths';
import { usePictureUrl } from '../../../shared/lib/usePictureUrl';
import { getOptimizedFullDescription } from '../../../shared/lib/landmarkOptimization';
import { useMenuDisplay } from '../lib/useMenuDisplay';
import { LandmarkMenu } from './LandmarkMenu';

interface LandmarkDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  selectedLandmark: Landmark | null;
}

// ✅ Инъектим CSS стили один раз при загрузке
const injectLandmarkStyles = () => {
  if (document.getElementById('landmark-details-styles')) return;

  const style = document.createElement('style');
  style.id = 'landmark-details-styles';
  style.textContent = `
    .image-fade-in {
      opacity: 0;
      transition: opacity 300ms ease-in-out;
      display: block;
    }

    .image-fade-in.loaded {
      opacity: 1 !important;
    }

    .landmark__img-wrapper {
      position: relative;
      width: 100%;
      padding-bottom: 75%;
      overflow: hidden;
      border-radius: 8px;
      background: #666;
      margin: 16px 0;
    }

    .landmark__img-wrapper img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    }

    .landmark__img-wrapper img.loaded {
      opacity: 1 !important;
    }

    .landmark-details-content p {
      margin: 16px 0;
      line-height: 1.6;
    }

    .landmark-details-content h6 {
      margin: 20px 0 10px 0;
      font-weight: 600;
    }

    .landmark-details-content small {
      display: block;
      margin-top: 8px;
      font-size: 0.85em;
      color: #666;
    }
  `;
  document.head.appendChild(style);
};

// ✅ Функция загрузки картинок (отдельно)
const loadImagesInDialog = (
  dialogContentRef: React.MutableRefObject<HTMLDivElement | null>
): IntersectionObserver | null => {
  if (!dialogContentRef.current) return null;

  const images = dialogContentRef.current.querySelectorAll(
    'img[data-src]'
  ) as NodeListOf<HTMLImageElement>;

  if (!images || images.length === 0) {
    console.log('🖼️ [Dialog] No images found');
    return null;
  }

  //console.log(`🖼️ [Dialog] Loading ${images.length} images`);

  let loadedCount = 0;

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const dataSrc = img.getAttribute('data-src');

          if (dataSrc) {
            //console.log(`📥 Loading: ${dataSrc}`);
            img.src = dataSrc;
            img.classList.add('loaded');
            img.removeAttribute('data-src');
            loadedCount++;
            imageObserver.unobserve(img);

            // Если все картинки загружены
            if (loadedCount === images.length) {
              //console.log('✅ All images loaded');
            }
          }
        }
      });
    },
    { rootMargin: '100px' }
  );

  images.forEach((img) => {
    imageObserver.observe(img);
  });

  return imageObserver;
};

export const LandmarkDetailsDialog: React.FC<LandmarkDetailsDialogProps> = ({
  open,
  onClose,
  selectedLandmark,
}) => {
  const { t, i18n } = useTranslation();
  const getImageUrl = usePictureUrl();
  const {
    getLocalizedMenu,
    getMenuItems,
    selectedCategory,
    setSelectedCategory,
  } = useMenuDisplay();

  const dialogContentRef = useRef<HTMLDivElement>(null);
  const [loadedModalImages, setLoadedModalImages] = useState<Set<string>>(
    new Set()
  );
  // ✅ ИСПРАВЛЕНО: инициализируем как null, не undefined
  const observerRef = useRef<IntersectionObserver | null>(null);

  // ✅ Инъектим стили один раз
  useEffect(() => {
    injectLandmarkStyles();
  }, []);

  const getLocalizedContent = useCallback(
    (landmark: Landmark): LandmarkContent => {
      const lang = i18n.language as keyof Pick<
        Landmark,
        'ru' | 'en' | 'es' | 'fr' | 'vn'
      >;

      if (lang === 'ru' && landmark.ru) return landmark.ru;
      if (lang === 'es' && landmark.es) return landmark.es;
      if (lang === 'fr' && landmark.fr) return landmark.fr;
      if (lang === 'vn' && landmark.vn) return landmark.vn;
      return landmark.en;
    },
    [i18n.language]
  );

  // ✅ ГЛАВНОЕ: Срабатывает когда диалог ОТКРЫВАЕТСЯ или меняется landmark
  useEffect(() => {
    if (!open || !selectedLandmark) {
      // Очищаем observer если диалог закрывается
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      return;
    }

    //console.log('📖 [Dialog] Opening with landmark:', selectedLandmark.id);

    // ✅ Задержка чтобы DOM отрендерился
    const timer = setTimeout(() => {
      const observer = loadImagesInDialog(dialogContentRef);
      // ✅ ИСПРАВЛЕНО: присваиваем результат правильно
      observerRef.current = observer;
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [open, selectedLandmark?.id]); // ✅ Зависит от open И id

  const mainImageUrl = selectedLandmark?.imageUrl
    ? getImageUrl(selectedLandmark.imageUrl)
    : undefined;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      disableRestoreFocus
      sx={{
        '& .MuiDialog-paper': {
          width: '100%',
          m: 1,
          maxHeight: 'calc(100dvh - 16px)',
        },
      }}
    >
      <DialogTitle sx={{ p: 2, pt: 1, pb: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">
            {selectedLandmark
              ? getLocalizedContent(selectedLandmark).title
              : t('details')}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent dividers ref={dialogContentRef} sx={{ pl: 2, pr: 2 }}>
        {selectedLandmark ? (
          <Box>
            {mainImageUrl && (
              <Box
                component="img"
                src={mainImageUrl}
                alt={getLocalizedContent(selectedLandmark).title}
                className={`image-fade-in ${
                  loadedModalImages.has(mainImageUrl) ? 'loaded' : ''
                }`}
                onLoad={() =>
                  setLoadedModalImages((prev) =>
                    new Set(prev).add(mainImageUrl)
                  )
                }
                onError={() =>
                  setLoadedModalImages((prev) =>
                    new Set(prev).add(mainImageUrl)
                  )
                }
                sx={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  mb: 2,
                }}
              />
            )}

            {getLocalizedContent(selectedLandmark).fullDescription ? (
              <Box
                className="landmark-details-content"
                sx={{ mb: 2 }}
                dangerouslySetInnerHTML={{
                  __html: getOptimizedFullDescription(
                    selectedLandmark,
                    getLocalizedContent(selectedLandmark),
                    fullDescriptionImageMap
                  ),
                }}
              />
            ) : (
              <Typography>{t('noDetailsAvailable')}</Typography>
            )}

            <LandmarkMenu
              landmark={selectedLandmark}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              getLocalizedMenu={getLocalizedMenu}
              getMenuItems={getMenuItems}
            />
          </Box>
        ) : (
          <Typography>{t('noDetailsAvailable')}</Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} autoFocus>
          {t('close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
