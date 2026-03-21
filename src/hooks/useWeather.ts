import { useQuery } from '@tanstack/react-query';
import { getWeather } from '@app/api/endpoints';
import type { Weather } from '@app/types';

export const useWeather = (lat?: number, lon?: number) => {
  return useQuery<Weather>({
    queryKey: ['weather', lat, lon],
    queryFn: () => getWeather(lat!, lon!),
    enabled: Boolean(lat) && Boolean(lon),
  });
};
