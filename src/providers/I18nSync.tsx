import { useEffect } from 'react';
import i18n from '@app/i18n';
import { useLanguage } from '@app/store';

export const I18nSync = () => {
  const language = useLanguage();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return null;
};
