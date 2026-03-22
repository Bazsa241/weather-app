import { AppBar, Toolbar } from '@mui/material';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { HeaderContentDivider } from './HeaderContentDivider';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-end gap-2">
        <LanguageSwitcher />
        <HeaderContentDivider />
        <ThemeSwitcher />
      </Toolbar>
    </AppBar>
  );
};
