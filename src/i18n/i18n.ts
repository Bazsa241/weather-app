import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './en/common.json';
import huCommon from './hu/common.json';

import enWeatherCode from './en/weatherCode.json';
import huWeatherCode from './hu/weatherCode.json';

import enDays from './en/days.json';
import huDays from './hu/days.json';

import enError from './en/error.json';
import huError from './hu/error.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      weatherCode: enWeatherCode,
      days: enDays,
      error: enError,
    },
    hu: {
      common: huCommon,
      weatherCode: huWeatherCode,
      days: huDays,
      error: huError,
    },
  },
  lng: 'hu',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
