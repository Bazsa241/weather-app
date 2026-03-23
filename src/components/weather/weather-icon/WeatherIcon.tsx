import type { FC } from 'react';
import { WiDaySunny } from 'react-icons/wi';
import { WiCloudy } from 'react-icons/wi';
import { WiRain } from 'react-icons/wi';
import { WiSnow } from 'react-icons/wi';
import { WiFog } from 'react-icons/wi';
import { WiRainMix } from 'react-icons/wi';
import { WiSnowflakeCold } from 'react-icons/wi';

type WeatherIconProps = {
  code: number;
  size?: number;
};

const group = (codes: number[], icon: FC<{ size?: number }>) =>
  Object.fromEntries(codes.map((c) => [c, icon]));

const iconMap = {
  ...group([0, 1], WiDaySunny),
  ...group([2, 3], WiCloudy),
  ...group([45], WiFog),
  ...group([48], WiSnowflakeCold),
  ...group([56, 57, 66, 67], WiRainMix),
  ...group([51, 53, 55, 61, 63, 65, 80, 81, 82], WiRain),
  ...group([71, 73, 75, 77, 85, 86], WiSnow),
};

export const WeatherIcon: FC<WeatherIconProps> = ({ code, size }) => {
  const Icon = iconMap[code] || WiDaySunny;

  return <Icon size={size} />;
};
