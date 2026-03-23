import { Box } from '@mui/material';
import { useWeather } from '@app/hooks';
import { CurrentWeather } from './current-weather';
import { WeeklyForecast } from './weekly-forecast';
import { TemperatureChart } from './temperature-chart';

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
        currentWeatherUnits={weather.current_weather_units}
      />
      <WeeklyForecast dailyWeather={weather.daily} dailyWeatherUnits={weather.daily_units} />
      <TemperatureChart dailyWeather={weather.daily} />
    </Box>
  );
};
