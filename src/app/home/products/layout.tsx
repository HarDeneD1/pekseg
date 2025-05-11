import ProductLayoutComponent from "@/components/products/ProductLayoutComponent";
import React from "react";

export default async function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  url: string;
}>) {
  return (
    <div className="flex flex-col bg-gray-800 h-screen bg-gradient-to-b from-black opacity-95 ">
      <ProductLayoutComponent></ProductLayoutComponent>
      {children}
    </div>
  );
}
