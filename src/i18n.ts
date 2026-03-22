import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './i18n/en/common.json';
import huCommon from './i18n/hu/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    hu: { common: huCommon },
  },
  lng: 'hu',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
