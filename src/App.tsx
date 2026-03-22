import { Typography } from '@mui/material';
import { AppLayout } from '@app/layouts';

export const App = () => {
  return (
    <AppLayout>
      <Typography variant="h3" component="h1" textAlign="center">
        Weather App
      </Typography>
    </AppLayout>
  );
};
