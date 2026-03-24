import { AppLayout } from '@app/layouts';
import { WeatherSection } from './components/weather';
import { CitySelectModal } from './components/modal';

export const App = () => {
  return (
    <AppLayout>
      <WeatherSection />
      <CitySelectModal />
    </AppLayout>
  );
};
