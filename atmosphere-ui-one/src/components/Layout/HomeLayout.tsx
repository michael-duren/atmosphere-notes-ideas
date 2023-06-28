import MoonCanvas from '../../canvas/MoonCanvas.tsx';
import { Suspense } from 'react';
import Spinner from '../Ui/Spinners/Spinner.tsx';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <main className="min-h-[100vh] min-w-[100vw] text-white flex flex-col items-center justify-center">
        <Suspense fallback={<Spinner />}>
          <MoonCanvas />
          {children}
        </Suspense>
      </main>
    </>
  );
}
