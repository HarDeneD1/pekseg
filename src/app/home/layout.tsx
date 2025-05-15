import LayoutComponent from "@/components/LayoutComponent";
import { ProductContextProvider } from "@/app/context/queryContext";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductContextProvider>
      <div>
        <LayoutComponent />
        {children}
      </div>
    </ProductContextProvider>
  );
}
