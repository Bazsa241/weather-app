import { useGetDayName } from '@app/hooks';
import type { TooltipContentProps } from 'recharts';
import type { ChartData } from './TemperatureChart';
import { GlassCard } from '@app/components/ui';
import { Box, Typography } from '@mui/material';
import { WeatherIcon } from '@app/components/weather/weather-icon';

export const TooltipContent = ({ active, payload }: TooltipContentProps) => {
  const getDayName = useGetDayName();
  const isVisible = active && payload && payload.length;

  if (!isVisible) {
    return null;
  }

  const colorMin = payload[1].color;
  const colorMax = payload[0].color;
  const data = payload[0].payload as ChartData;

  return (
    <GlassCard>
      <Box className="flex items-center gap-1">
        <Typography>{getDayName(data.day)}</Typography>
        <WeatherIcon code={data.weatherCode} size={24} />
      </Box>
      <Typography color={colorMax}>max: {data.max} °C</Typography>
      <Typography color={colorMin}>min: {data.min} °C</Typography>
    </GlassCard>
  );
};
