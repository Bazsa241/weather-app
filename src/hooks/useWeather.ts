import { useQuery } from '@tanstack/react-query';
import { getWeather } from '@app/api/endpoints';

export const useWeather = (lat?: number, lon?: number) => {
  return useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => getWeather(lat!, lon!),
    enabled: Boolean(lat) && Boolean(lon),
  });
};
