import React from "react";
import ButtonComponent from "@/components/products/ButtonComponent";

const ProductMainComponent = () => {
  return (
    <div>
      <div className="flex flex-row m-6 ">
        <ButtonComponent>Sós sütemények</ButtonComponent>
        <ButtonComponent>Édes sütemények</ButtonComponent>
      </div>
    </div>
  );
};

export default ProductMainComponent;
