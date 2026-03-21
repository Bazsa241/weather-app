import axios from 'axios';
import { handleApiError } from './handlers/errorHandler';

export const geoClient = axios.create({
  baseURL: 'https://geocoding-api.open-meteo.com/v1',
  timeout: 10000,
});

export const weatherClient = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
  timeout: 10000,
});

geoClient.interceptors.response.use((res) => res, handleApiError);

weatherClient.interceptors.response.use((res) => res, handleApiError);
