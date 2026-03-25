import { Button, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage, useSetLanguage } from '@app/store';

export const LanguageSwitcher = () => {
  const language = useLanguage();
  const setLanguage = useSetLanguage();

  const handleLanguageSwitch = () => {
    setLanguage(language === 'hu' ? 'en' : 'hu');
  };

  return (
    <Button color="inherit" onClick={handleLanguageSwitch} endIcon={<LanguageIcon />}>
      <Typography>{language.toUpperCase()}</Typography>
    </Button>
  );
};
