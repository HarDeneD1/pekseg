import React from "react";
import { prisma } from "../../../../../client";
import { Product } from "@prisma/client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const SweetPage = async () => {
  const products: Product[] = await prisma.product.findMany({
    where: { category: "SWEET" },
  });
  return (
    <div className="h-[40rem] relative  flex items-center justify-center gap-10 mx-10">
      <hr className="my-4 border-t border-amber-300 dark:bg-amber-300 text-amber-300" />
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

export default SweetPage;
