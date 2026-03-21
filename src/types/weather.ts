export type CurrentWeather = {
  temperature: number;
  weathercode: number;
  windspeed: number;
  winddirection: number;
  time: string;
};

export type DailyWeather = {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
  precipitation_probability_max: number[];
};

export type CurrentWeatherUnits = {
  temperature: string;
  time: string;
  weathercode: string;
  windspeed: string;
  winddirection: string;
};

export type DailyWeatherUnits = {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  precipitation_probability_max: string;
  weathercode: string;
};

export type Weather = {
  current_weather: CurrentWeather;
  daily: DailyWeather;
  current_weather_units: CurrentWeatherUnits;
  daily_units: DailyWeatherUnits;
  latitude: number;
  longitude: number;
};
