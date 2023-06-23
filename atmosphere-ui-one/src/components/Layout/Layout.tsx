interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <main className="grid grid-cols-9 p-6 text-white">{children}</main>;
}
