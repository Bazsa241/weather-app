import { ColorModeContext } from '@app/theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import { useContext } from 'react';

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <IconButton onClick={toggleColorMode}>
      {colorMode === 'light' ? <LightModeIcon color="warning" /> : <DarkModeIcon />}
    </IconButton>
  );
};
