"use client";

import React from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Product } from "@prisma/client";

const ProductContainer: React.FC<{
  products: Product[] | null;
}> = ({ products }) => {
  if (products) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1   m-5 mx-auto items-center justify-center gap-5 ">
        {products.map((product) => (
          <DirectionAwareHover imageUrl={product.image} key={product.id}>
            <p className="font-bold text-xl">{product.name}</p>
            <p className="font-normal text-sm">{product.weight} g</p>
            <p className="font-bold text-xl">{product.price} Ft</p>
          </DirectionAwareHover>
        ))}
      </div>
    );
  }
};

export default ProductContainer;
