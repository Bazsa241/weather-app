import { useCity, useOpenModal } from '@app/store';
import { useWeather } from './useWeather';
import { useToastError } from './useToastError';

export const useWeatherSection = () => {
  const city = useCity();
  const { data: weather, isLoading, error, isError } = useWeather(city?.latitude, city?.longitude);
  const openModal = useOpenModal();

  useToastError(error, isError);

  if (!city) {
    openModal();
  }

  return {
    city,
    weather,
    isLoading,
  };
};
