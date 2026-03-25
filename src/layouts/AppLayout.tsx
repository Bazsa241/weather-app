import { Header } from '@app/components';
import { Footer } from '@app/components/footer';
import { useColorMode } from '@app/store';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const colorMode = useColorMode();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        colorMode === 'light'
          ? 'bg-linear-to-b from-blue-100 to-blue-500'
          : 'bg-linear-to-b from-blue-950 to-blue-500'
      }`}
    >
      <Header />
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
