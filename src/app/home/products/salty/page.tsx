import React from "react";
import CardComponent from "@/components/products/CardComponent";
import { prisma } from "../../../../../client";
import { Product } from "@prisma/client";

const SaltyPage = async () => {
  const products: Product[] = await prisma.product.findMany({
    where: { category: "SALTY" },
  });

  return (
    <div className="grid m-10 lg:grid-cols-3 items-center justify-evenly  gap-10  sm:grid-cols-1 md:grid-cols-2  opacity-95 bg-gradient-to-b">
      {products.map((product) => (
        <CardComponent key={product.id} product={product}></CardComponent>
      ))}
    </div>
  );
};

export default SaltyPage;
