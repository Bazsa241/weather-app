import { AxiosError } from 'axios';

export const handleApiError = (error: AxiosError) => {
  console.error('API error:', error);

  if (error.response) {
    console.error('Response error:', error.response.data);
  } else if (error.request) {
    console.error('No response received');
  } else {
    console.error('Request setup error:', error.message);
  }

  return Promise.reject(error);
};
