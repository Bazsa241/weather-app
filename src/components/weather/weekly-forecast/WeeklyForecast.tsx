import { Box, Typography } from '@mui/material';
import { GlassCard } from '@app/components/ui';
import type { DailyWeather, DailyWeatherUnits } from '@app/types';
import { useGetDayName } from '@app/hooks';
import { WeatherIcon } from '@app/components/weather/weather-icon';

type WeeklyForecastProps = {
  dailyWeather: DailyWeather;
  dailyWeatherUnits: DailyWeatherUnits;
};

export const WeeklyForecast = ({ dailyWeather, dailyWeatherUnits }: WeeklyForecastProps) => {
  const getDayName = useGetDayName();

  return (
    <GlassCard className="flex flex-col p-2 gap-2">
      {dailyWeather.time.map((date, i) => (
        <Box key={date} className="grid grid-cols-3 items-center justify-center">
          <Typography>{i === 0 ? getDayName('today') : getDayName(date)}</Typography>

          <Box className="flex items-center justify-self-start gap-1 sm:gap-3 sm:justify-self-center">
            <WeatherIcon code={dailyWeather.weathercode[i]} size={32} />
            <Typography color="text.secondary" className="text-center">
              {dailyWeather.precipitation_probability_max[i]}
              {dailyWeatherUnits.precipitation_probability_max}
            </Typography>
          </Box>

          <Box className="flex justify-between gap-1 sm:gap-3">
            <Typography className="text-end flex-1 text-nowrap">
              {dailyWeather.temperature_2m_min[i]} {dailyWeatherUnits.temperature_2m_min}
            </Typography>
            <Typography>/</Typography>
            <Typography className="text-start w-16 text-nowrap">
              {dailyWeather.temperature_2m_max[i]} {dailyWeatherUnits.temperature_2m_max}
            </Typography>
          </Box>
        </Box>
      ))}
    </GlassCard>
  );
};
