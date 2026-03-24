import { useCity, useOpenModal } from '@app/store';
import { useWeather } from './useWeather';

export const useWeatherSection = () => {
  const city = useCity();
  const { data: weather, isLoading } = useWeather(city?.latitude, city?.longitude);
  const openModal = useOpenModal();

  if (!city) {
    openModal();
  }

  return {
    city,
    weather,
    isLoading,
  };
};
