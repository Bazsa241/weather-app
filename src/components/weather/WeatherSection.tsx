import { Box } from '@mui/material';
import { CurrentWeather } from './CurrentWeather';
import { useWeather } from '@app/hooks';

export const WeatherSection = () => {
  const lat = 47.5316; // Debrecen
  const lon = 21.6273;

  const { data: weather, isLoading } = useWeather(lat, lon);

  if (isLoading || !weather) {
    return null;
  }

  return (
    <Box className="flex flex-col gap-6">
      <CurrentWeather
        city="Debrecen"
        currentWeather={weather.current_weather}
        units={weather.current_weather_units}
      />
    </Box>
  );
};
