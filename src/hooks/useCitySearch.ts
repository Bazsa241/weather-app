import { useQuery } from '@tanstack/react-query';
import { searchCity } from '@app/api/endpoints';
import type { City } from '@app/types';

export const useCitySearch = (query: string) => {
  return useQuery<City[]>({
    queryKey: ['city-search', query],
    queryFn: () => searchCity(query),
    enabled: query.length > 2,
  });
};
