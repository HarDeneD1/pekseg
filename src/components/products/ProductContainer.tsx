"use client";

import React from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Product } from "@prisma/client";
import { Spinner } from "@/components/ui/Spinner";

const ProductContainer: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <>
      <div>{!products.length && <Spinner></Spinner>}</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1   m-5 mx-auto items-center justify-center gap-5 ">
        {products.map((product) => (
          <DirectionAwareHover imageUrl={product.image} key={product.id}>
            <p className="font-bold text-xl">{product.name}</p>
            <p className="font-normal text-sm">{product.price} Ft</p>
            <p className="font-bold text-xl">{product.weight} g</p>
          </DirectionAwareHover>
        ))}
      </div>
    </>
  );
};

export default ProductContainer;
