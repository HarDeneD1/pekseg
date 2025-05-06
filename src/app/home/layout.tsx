import LayoutComponent from "@/components/LayoutComponent";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <LayoutComponent />
      {children}
    </div>
  );
}
