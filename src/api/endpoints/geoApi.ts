import { geoClient } from '../client';

export const searchCity = async (name: string) => {
  const res = await geoClient.get('/search', {
    params: {
      name,
      count: 10,
    },
  });

  return res.data.results;
};
