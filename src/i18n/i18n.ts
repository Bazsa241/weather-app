import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './en/common.json';
import huCommon from './hu/common.json';

import enWeatherCode from './en/weatherCode.json';
import huWeatherCode from './hu/weatherCode.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon, weatherCode: enWeatherCode },
    hu: { common: huCommon, weatherCode: huWeatherCode },
  },
  lng: 'hu',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
