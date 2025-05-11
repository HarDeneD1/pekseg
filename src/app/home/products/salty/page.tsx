import React from "react";
import { prisma } from "../../../../../client";
import { Product } from "@prisma/client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const SaltyPage = async () => {
  const products: Product[] = await prisma.product.findMany({
    where: { category: "SALTY" },
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1  h-[40rem] m-5 mx-auto items-center justify-center gap-5 ">
      {products.map((product) => (
        <DirectionAwareHover imageUrl={product.image}>
          <p className="font-bold text-xl">{product.name}</p>
          <p className="font-normal text-sm">{product.price} Ft</p>
          <p className="font-bold text-xl">{product.weight} g</p>
        </DirectionAwareHover>
      ))}
    </div>
  );
};

export default SaltyPage;
