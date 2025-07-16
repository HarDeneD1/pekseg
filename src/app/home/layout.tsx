import LayoutComponent from "@/components/LayoutComponent";
import { ProductContextProvider } from "@/app/context/queryContext";
import FooterComponent from "@/components/FooterComponent";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductContextProvider>
      <div className="flex flex-col min-h-screen max-w-screen">
        <LayoutComponent />
        <div className="flex flex-col ">
          <main>{children}</main>
          <FooterComponent />
        </div>
      </div>
    </ProductContextProvider>
  );
}
