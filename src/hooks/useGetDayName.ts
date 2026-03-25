import { useTranslation } from 'react-i18next';

export const useGetDayName = () => {
  const { t } = useTranslation('days');

  const getDayName = (dateString: string, short: boolean = false) => {
    if (dateString === 'today') {
      return t('today');
    }

    const day = new Date(dateString).getDay();

    if (short) {
      return t(`short.${day}`);
    }
    return t(`long.${day}`);
  };

  return getDayName;
};
