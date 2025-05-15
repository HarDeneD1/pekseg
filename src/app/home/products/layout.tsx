import ProductLayoutComponent from "@/components/products/ProductLayoutComponent";
import React from "react";

export default async function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  url: string;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 opacity-95 pb-10 p-5">
      <ProductLayoutComponent></ProductLayoutComponent>
      {children}
    </div>
  );
}
