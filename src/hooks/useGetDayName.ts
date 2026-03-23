import { useTranslation } from 'react-i18next';

export const useGetDayName = () => {
  const { t } = useTranslation();

  const getDayName = (dateString: string, short: boolean = false) => {
    if (dateString === 'today') {
      return t('days:today');
    }

    const day = new Date(dateString).getDay();

    if (short) {
      return t(`days:short.${day}`);
    }
    return t(`days:long.${day}`);
  };

  return getDayName;
};
