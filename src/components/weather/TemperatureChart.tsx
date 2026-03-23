import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  type TooltipContentProps,
} from 'recharts';
import { Box, Typography, useTheme } from '@mui/material';
import type { DailyWeather } from '@app/types';
import { GlassCard } from '@app/components/ui';
import { useGetDayName } from '@app/hooks';
import { WeatherIcon } from './WeatherIcon';

type TemperatureChartProps = {
  dailyWeather: DailyWeather;
};

type ChartData = {
  day: string;
  min: number;
  max: number;
  weatherCode: number;
};

const TooltipContent = ({ active, payload }: TooltipContentProps) => {
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

export const TemperatureChart = ({ dailyWeather }: TemperatureChartProps) => {
  const theme = useTheme();
  const getDayName = useGetDayName();

  const data: ChartData[] = dailyWeather.time.map((date, i) => ({
    day: date,
    min: dailyWeather.temperature_2m_min[i],
    max: dailyWeather.temperature_2m_max[i],
    weatherCode: dailyWeather.weathercode[i],
  }));

  return (
    <GlassCard>
      <Box className="h-64 w-full">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 10, left: 20, bottom: 0 }}>
            <XAxis
              dataKey="day"
              tickFormatter={(tick) => getDayName(tick, true)}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: theme.palette.text.secondary,
              }}
            />

            <Tooltip
              contentStyle={{
                background: theme.palette.background.paper,
                border: 'none',
                borderRadius: 12,
              }}
              content={TooltipContent}
              formatter={(value, name) => [`${value} °C`, name]}
              labelFormatter={(value) => getDayName(value)}
            />

            <CartesianGrid vertical={false} stroke={theme.palette.divider} strokeDasharray="5 5" />

            <Line
              type="monotone"
              dataKey="max"
              stroke={theme.palette.warning.main}
              strokeWidth={2}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="min"
              stroke={theme.palette.primary.main}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </GlassCard>
  );
};
