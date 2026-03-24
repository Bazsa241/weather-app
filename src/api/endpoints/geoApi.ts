import type { City, CityResponse } from '@app/types';
import { geoClient } from '../client';

export const searchCity = async (name: string): Promise<City[]> => {
  const res = await geoClient.get<CityResponse>('/search', {
    params: {
      name,
      count: 5,
    },
  });

  return res.data.results;
};
