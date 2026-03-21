import { useQuery } from '@tanstack/react-query';
import { searchCity } from '@app/api/endpoints';

export const useCitySearch = (query: string) => {
  return useQuery({
    queryKey: ['city-search', query],
    queryFn: () => searchCity(query),
    enabled: query.length > 2,
  });
};
