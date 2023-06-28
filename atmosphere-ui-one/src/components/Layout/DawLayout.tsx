import DawHeader from './DawHeader.tsx';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function DawLayout({ children }: LayoutProps) {
  return (
    <div className="p-6">
      <DawHeader />
      <main className="grid lg:grid-cols-12 gap-4 text-white">{children}</main>
    </div>
  );
}
