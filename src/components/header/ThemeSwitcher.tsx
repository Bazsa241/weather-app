import { useColorMode, useToggleColorMode } from '@app/store';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';

export const ThemeSwitcher = () => {
  const colorMode = useColorMode();
  const toggleColorMode = useToggleColorMode();

  return (
    <IconButton onClick={toggleColorMode}>
      {colorMode === 'light' ? <LightModeIcon color="warning" /> : <DarkModeIcon />}
    </IconButton>
  );
};
