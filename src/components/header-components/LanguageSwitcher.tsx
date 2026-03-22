import { Button, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const handleLanguageChange = () => {
    const nextLang = i18n.language === 'hu' ? 'en' : 'hu';
    i18n.changeLanguage(nextLang);
  };

  return (
    <Button color="inherit" onClick={handleLanguageChange} endIcon={<LanguageIcon />}>
      <Typography>{i18n.language.toUpperCase()}</Typography>
    </Button>
  );
};
