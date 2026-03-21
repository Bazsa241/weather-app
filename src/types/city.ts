export type City = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country_code: string;
};

export type CityResponse = {
  results: City[];
};
