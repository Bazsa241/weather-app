import { AppLayout } from '@app/layouts';
import { WeatherSection } from './components/weather';

export const App = () => {
  return (
    <AppLayout>
      <WeatherSection />
    </AppLayout>
  );
};
