// src/components/MapComponent.tsx
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet'; // Импортируем объект Leaflet для кастомных иконок
import { useTranslation } from 'react-i18next'; // Для локализации названий и описаний
import { Typography } from '@mui/material';

// Импортируем данные о достопримечательностях
import { hoiAnLandmarks } from '../data/landmarks';
import type { Landmark } from '../data/landmarks';

// Компонент для отображения текущего местоположения пользователя
function LocationMarker() {
  const [position, setPosition] = useState<L.LatLngExpression | null>(null);
  const map = useMap(); // Получаем доступ к экземпляру карты

  useEffect(() => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom()); // Центрируем карту на пользователе
      // Можно добавить круг для точности, если нужно
      //L.circle(e.latlng, e.accuracy).addTo(map);
    });

    map.on('locationerror', function (e) {
      console.error('Geolocation error:', e.message);
      // Опционально: можно показать сообщение или перецентрировать карту на Хойане
      // map.setView([15.8794, 108.3379], 13);
    });

    // Очистка событий при размонтировании компонента
    return () => {
      map.off('locationfound');
      map.off('locationerror');
    };
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Вы находитесь здесь!</Popup>
    </Marker>
  );
}

// Основной компонент карты
function MapComponent() {
  const { i18n } = useTranslation(); // Для определения текущего языка
  const defaultCenter: L.LatLngExpression = [15.8794, 108.3379]; // Центр Хойана
  const defaultZoom = 13;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={true}
      style={{
        height: '100%',
        width: '100%',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <TileLayer
        attribution=""
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Маркеры для достопримечательностей Хойана */}
      {hoiAnLandmarks.map((landmark: Landmark) => (
        <Marker key={landmark.id} position={landmark.coordinates}>
          <Popup>
            <div style={{ maxWidth: '250px' }}>
              <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                {i18n.language === 'ru' ? landmark.name_ru : landmark.name_en}
              </Typography>
              {landmark.imageUrl && (
                <img
                  src={landmark.imageUrl}
                  alt={
                    i18n.language === 'ru' ? landmark.name_ru : landmark.name_en
                  }
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    marginBottom: '8px',
                  }}
                />
              )}
              <Typography variant="body2" sx={{ mb: 1 }}>
                {i18n.language === 'ru'
                  ? landmark.description_ru
                  : landmark.description_en}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Категория: {landmark.category}
              </Typography>
            </div>
          </Popup>
        </Marker>
      ))}
      <LocationMarker /> {/* Маркер текущего местоположения пользователя */}
    </MapContainer>
  );
}

export default MapComponent;
