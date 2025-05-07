"use client";

import React from "react";
import ButtonComponent from "@/components/products/ButtonComponent";
import { usePathname } from "next/navigation";

const ProductLayoutComponent = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <div className="flex flex-row m-6 ">
        <ButtonComponent active={path === "/home/products/salty"}>
          Sós sütemények
        </ButtonComponent>
        <ButtonComponent active={path === "/home/products/sweet"}>
          Édes sütemények
        </ButtonComponent>
      </div>
    </div>
  );
};

export default ProductLayoutComponent;
