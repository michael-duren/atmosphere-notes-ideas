interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <main className="min-h-[100vh] text-white flex flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}
