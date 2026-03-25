import cn from 'classnames';
import { GlassCard } from '@app/components/ui';
import { WeatherIcon } from '../weather-icon/WeatherIcon';

export const WeatherIconCard = ({
  weatherCode,
  className,
}: {
  weatherCode: number;
  className?: string;
}) => {
  return (
    <GlassCard className={cn('flex items-center justify-center', className)}>
      <WeatherIcon code={weatherCode} size={80} />
    </GlassCard>
  );
};
