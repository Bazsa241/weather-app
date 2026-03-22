import { useTranslation } from 'react-i18next';

export const useGetDayName = () => {
  const { t } = useTranslation();

  const getDayName = (dateString: string) => {
    if (dateString === 'today') {
      return t('days:today');
    }

    const day = new Date(dateString).getDay();
    return t(`days:${day}`);
  };

  return getDayName;
};
