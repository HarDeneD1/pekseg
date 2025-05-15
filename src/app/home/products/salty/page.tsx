import React from "react";
import { prisma } from "../../../../../client";
import { Product } from "@prisma/client";
import ProductContainer from "@/components/products/ProductContainer";

const SaltyPage = async () => {
  const products: Product[] = await prisma.product.findMany({
    where: { category: "SALTY" },
  });

  return <ProductContainer products={products}></ProductContainer>;
};

export default SaltyPage;
