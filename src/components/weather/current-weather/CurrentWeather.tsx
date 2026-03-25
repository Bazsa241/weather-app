import { GlassCard } from '@app/components/ui';
import type { CurrentWeather as CurrentWeatherType, CurrentWeatherUnits } from '@app/types';
import { ButtonBase, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type CurrentWeatherProps = {
  city: string;
  currentWeather: CurrentWeatherType;
  currentWeatherUnits: CurrentWeatherUnits;
  onClick: () => void;
};

export const CurrentWeather = ({
  city,
  currentWeather,
  currentWeatherUnits,
  onClick,
}: CurrentWeatherProps) => {
  const { t } = useTranslation();

  return (
    <ButtonBase onClick={onClick} className="rounded-xl!">
      <GlassCard className="flex flex-col items-start min-w-45">
        <Typography variant="body2">{city}</Typography>
        <Typography variant="h3" className="text-nowrap">
          {currentWeather.temperature} {currentWeatherUnits.temperature}
        </Typography>
        <Typography variant="body1">
          {t(`weatherCode:${currentWeather.weathercode}`, t('common:unknown'))}
        </Typography>
      </GlassCard>
    </ButtonBase>
  );
};
