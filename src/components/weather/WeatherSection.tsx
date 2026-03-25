import { Box } from '@mui/material';
import { useWeatherSection } from '@app/hooks';
import { CurrentWeather } from './current-weather';
import { WeeklyForecast } from './weekly-forecast';
import { TemperatureChart } from './temperature-chart';
import { useOpenModal } from '@app/store';
import { CityLocation } from '@app/components/city-location';
import { WeatherIconCard } from './weather-icon-card';

export const WeatherSection = () => {
  const { city, weather, isLoading } = useWeatherSection();
  const openModal = useOpenModal();

  if (!city || !weather || isLoading) {
    return null;
  }

  return (
    <Box className="grid lg:grid-cols-3 gap-8">
      <Box className="flex flex-col gap-8">
        <Box className="flex gap-8">
          <CurrentWeather
            city={city.name}
            currentWeather={weather.current_weather}
            currentWeatherUnits={weather.current_weather_units}
            onClick={openModal}
          />
          <WeatherIconCard
            className="flex-1 hidden sm:flex max-w-48"
            weatherCode={weather.current_weather.weathercode}
          />
        </Box>
        <CityLocation latitude={city.latitude} longitude={city.longitude} />
      </Box>
      <Box className="flex flex-col gap-8 col-span-2">
        <WeeklyForecast dailyWeather={weather.daily} dailyWeatherUnits={weather.daily_units} />
        <TemperatureChart dailyWeather={weather.daily} />
      </Box>
    </Box>
  );
};
