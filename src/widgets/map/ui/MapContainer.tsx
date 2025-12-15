import { memo } from 'react';
import { useMapContext } from '../../../entities/map/model/MapContext';

export const MapContainer = memo(() => {
  const { mapContainerRef } = useMapContext();

  return (
    <div
      ref={mapContainerRef}
      className="map-container"
      style={{ height: '100%', width: '100%' }}
    />
  );
});
