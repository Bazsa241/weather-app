import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { HeaderContentDivider } from './HeaderContentDivider';
import { Box } from '@mui/material';

export const Header = () => {
  return (
    <Box className="flex justify-end gap-2 px-6 py-2 min-h-16">
      <LanguageSwitcher />
      <HeaderContentDivider />
      <ThemeSwitcher />
    </Box>
  );
};
