import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { GlassCard } from '@app/components/ui';
import { useColorMode } from '@app/store';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

type CityLocationProps = {
  latitude: number;
  longitude: number;
};

type GeographyType = { rsmKey: string; properties: Record<string, string> };

export const CityLocation = ({ latitude, longitude }: CityLocationProps) => {
  const colorMode = useColorMode();

  const mapColors =
    colorMode === 'light'
      ? { fill: 'rgba(148,163,184,0.2)', stroke: 'rgba(71,85,105,0.8)' }
      : { fill: 'rgba(51,65,85,0.6)', stroke: 'rgba(148,163,184,0.8)' };

  const renderGeos = ({ geographies }: { geographies: GeographyType[] }) =>
    geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} {...mapColors} />);

  return (
    <GlassCard className="hidden lg:block w-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [longitude, latitude],
        }}
      >
        <Geographies geography={geoUrl}>{renderGeos}</Geographies>

        <Marker coordinates={[longitude, latitude]}>
          <circle r={8} fill="#f87171" />
        </Marker>
      </ComposableMap>
    </GlassCard>
  );
};
