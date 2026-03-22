import { GlassCard } from '@app/components/ui';
import type { CurrentWeather as CurrentWeatherType, CurrentWeatherUnits } from '@app/types';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type CurrentWeatherProps = {
  city: string;
  currentWeather: CurrentWeatherType;
  units: CurrentWeatherUnits;
};

export const CurrentWeather = ({ city, currentWeather, units }: CurrentWeatherProps) => {
  const { t } = useTranslation();

  return (
    <GlassCard className="w-min">
      <Typography variant="body2">{city}</Typography>
      <Typography variant="h2" className="text-nowrap">
        {currentWeather.temperature} {units.temperature}
      </Typography>
      <Typography variant="body1">
        {t(`weatherCode:${currentWeather.weathercode}`, t('common:unknown'))}
      </Typography>
    </GlassCard>
  );
};
