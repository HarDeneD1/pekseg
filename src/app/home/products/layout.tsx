import ProductLayoutComponent from "@/components/products/ProductLayoutComponent";
import React from "react";

export default async function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  url: string;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 relative bg-gradient-to-b from-black opacity-95 pb-10">
      <ProductLayoutComponent></ProductLayoutComponent>
      {children}
    </div>
  );
}
