import ProductLayoutComponent from "@/components/products/ProductLayoutComponent";
import React from "react";

export default async function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  url: string;
}>) {
  return (
    <div className="flex flex-col mt-5  opacity-95 pb-10  ">
      <ProductLayoutComponent></ProductLayoutComponent>
      {children}
    </div>
  );
}
