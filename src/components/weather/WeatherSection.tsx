import { Box } from '@mui/material';
import { useWeatherSection } from '@app/hooks';
import { CurrentWeather } from './current-weather';
import { WeeklyForecast } from './weekly-forecast';
import { TemperatureChart } from './temperature-chart';
import { useOpenModal } from '@app/store';

export const WeatherSection = () => {
  const { city, weather, isLoading } = useWeatherSection();
  const openModal = useOpenModal();

  if (!city || !weather || isLoading) {
    return null;
  }

  return (
    <Box className="grid lg:grid-cols-3 gap-8">
      <Box>
        <CurrentWeather
          city={city.name}
          currentWeather={weather.current_weather}
          currentWeatherUnits={weather.current_weather_units}
          onClick={openModal}
        />
      </Box>
      <Box className="grid gap-8 col-span-2">
        <WeeklyForecast dailyWeather={weather.daily} dailyWeatherUnits={weather.daily_units} />
        <TemperatureChart dailyWeather={weather.daily} />
      </Box>
    </Box>
  );
};
