import { Divider } from '@mui/material';

export const HeaderContentDivider = () => (
  <Divider
    orientation="vertical"
    variant="middle"
    flexItem
    sx={{
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#4d4c4c' : '#62abf5'),
    }}
  />
);
