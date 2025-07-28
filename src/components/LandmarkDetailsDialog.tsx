// src/components/LandmarkDetailsDialog.tsx
import React, { useCallback, useRef, useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button, // <- Убедитесь, что Button импортирован
  IconButton,
  Typography,
  Stack,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { type Landmark, type LandmarkContent } from '../data';
import { fullDescriptionImageMap } from '../utils/imagePaths';
import { getImageUrl as getGlobalImageUrl } from './HeroSection';

interface LandmarkDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  selectedLandmark: Landmark | null;
}

export const LandmarkDetailsDialog: React.FC<LandmarkDetailsDialogProps> = ({
  open,
  onClose,
  selectedLandmark,
}) => {
  const { t, i18n } = useTranslation();
  const dialogContentRef = useRef<HTMLDivElement>(null);
  const [loadedModalImages, setLoadedModalImages] = useState<Set<string>>(
    new Set()
  );

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

  const getProcessedFullDescription = useCallback(
    (landmark: Landmark) => {
      const content = getLocalizedContent(landmark);
      const descriptionHtml = content.fullDescription;
      const internalImageNames = content.internalImageNames;

      if (!descriptionHtml) {
        return '';
      }

      let processedHtml = descriptionHtml;

      if (internalImageNames && internalImageNames.length > 0) {
        internalImageNames.forEach((imageName: string) => {
          const realImageUrl = fullDescriptionImageMap[imageName];
          if (realImageUrl) {
            processedHtml = processedHtml.replace(
              new RegExp(`src="${imageName}"`, 'g'),
              `src="${realImageUrl}"`
            );
          } else {
            console.warn(
              `Warning: Image ${imageName} specified in internalImageNames but not found in fullDescriptionImageMap for landmark ${landmark.id}.`
            );
          }
        });
      }

      processedHtml = processedHtml.replace(
        /<img([^>]+?)\/?>/g,
        '<div class="landmark__img-wrapper"><img class="image-fade-in"$1/></div>'
      );
      return processedHtml;
    },
    [getLocalizedContent]
  );

  useEffect(() => {
    if (open && dialogContentRef.current) {
      dialogContentRef.current.scrollTop = 0;

      const imgElements = dialogContentRef.current.querySelectorAll(
        '.landmark-details-content .landmark__img-wrapper img'
      );

      imgElements.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.complete) {
          imageElement.classList.add('loaded');
        } else {
          const handleLoad = () => {
            imageElement.classList.add('loaded');
            imageElement.removeEventListener('load', handleLoad);
            imageElement.removeEventListener('error', handleError);
          };

          const handleError = () => {
            imageElement.classList.add('loaded');
            imageElement.removeEventListener('load', handleLoad);
            imageElement.removeEventListener('error', handleError);
          };

          imageElement.addEventListener('load', handleLoad);
          imageElement.addEventListener('error', handleError);
        }
      });
    }
  }, [open, selectedLandmark]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
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
            // autoFocus // Можно добавить autoFocus сюда, если эта кнопка всегда первая
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent dividers ref={dialogContentRef} sx={{ pl: 2, pr: 2 }}>
        {selectedLandmark ? (
          <Box>
            {selectedLandmark.imageUrl && (
              <Box
                component="img"
                src={getGlobalImageUrl(selectedLandmark.imageUrl)}
                alt={getLocalizedContent(selectedLandmark).title}
                className={`image-fade-in ${loadedModalImages.has(getGlobalImageUrl(selectedLandmark.imageUrl)) ? 'loaded' : ''}`}
                onLoad={() =>
                  setLoadedModalImages((prev) =>
                    new Set(prev).add(
                      getGlobalImageUrl(selectedLandmark.imageUrl)
                    )
                  )
                }
                onError={() =>
                  setLoadedModalImages((prev) =>
                    new Set(prev).add(
                      getGlobalImageUrl(selectedLandmark.imageUrl)
                    )
                  )
                }
                sx={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            )}

            {getLocalizedContent(selectedLandmark).fullDescription ? (
              <Box
                className="landmark-details-content"
                sx={{ mb: 2 }}
                dangerouslySetInnerHTML={{
                  __html: getProcessedFullDescription(selectedLandmark),
                }}
              />
            ) : (
              <Typography>{t('noDetailsAvailable')}</Typography>
            )}
          </Box>
        ) : (
          <Typography>{t('noDetailsAvailable')}</Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} autoFocus>
          {t('close')}
        </Button>{' '}
      </DialogActions>
    </Dialog>
  );
};
