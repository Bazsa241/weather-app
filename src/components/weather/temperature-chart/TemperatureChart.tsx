import { LineChart, Line, Tooltip, ResponsiveContainer, CartesianGrid, XAxis } from 'recharts';
import { useTheme } from '@mui/material';
import type { DailyWeather } from '@app/types';
import { GlassCard } from '@app/components/ui';
import { useGetDayName } from '@app/hooks';
import { TooltipContent } from './TooltipContent';

type TemperatureChartProps = {
  dailyWeather: DailyWeather;
};

export type ChartData = {
  day: string;
  min: number;
  max: number;
  weatherCode: number;
};

export const TemperatureChart = ({ dailyWeather }: TemperatureChartProps) => {
  const theme = useTheme();
  const getDayName = useGetDayName();

  const data: ChartData[] = dailyWeather.time.map((date, i) => ({
    day: i === 0 ? 'today' : date,
    min: dailyWeather.temperature_2m_min[i],
    max: dailyWeather.temperature_2m_max[i],
    weatherCode: dailyWeather.weathercode[i],
  }));

  return (
    <GlassCard>
      <ResponsiveContainer height={300}>
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
    </GlassCard>
  );
};
