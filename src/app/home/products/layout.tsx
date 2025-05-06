import ProductMainComponent from "@/components/products/ProductMainComponent";
import React from "react";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col bg-gray-800 h-screen bg-gradient-to-b from-black  opacity-95 ">
      <ProductMainComponent></ProductMainComponent>
      {children}
    </div>
  );
}
