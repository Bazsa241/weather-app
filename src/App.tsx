import { Typography } from '@mui/material';
import { Header } from '@app/components';

export const App = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <Typography variant="h3" component="h1">
          Weather App
        </Typography>
      </div>
    </>
  );
};
