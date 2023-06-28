import Header from './Header.tsx';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="p-6">
      <Header />
      <main className="grid lg:grid-cols-12 gap-4 text-white">{children}</main>
    </div>
  );
}
