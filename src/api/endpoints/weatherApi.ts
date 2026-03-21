import type { Weather } from '@app/types';
import { weatherClient } from '../client';

export const getWeather = async (lat: number, lon: number): Promise<Weather> => {
  const res = await weatherClient.get<Weather>('/forecast', {
    params: {
      latitude: lat,
      longitude: lon,
      current_weather: true,
      forecast_days: 7,
      daily: [
        'temperature_2m_max',
        'temperature_2m_min',
        'precipitation_probability_max',
        'weathercode',
      ],
      timezone: 'auto',
    },
  });

  return res.data;
};
