import React from "react";
import { prisma } from "../../../../../client";
import { Product } from "@prisma/client";
import ProductContainer from "@/components/products/ProductContainer";

const SweetPage = async () => {
  const products: Product[] = await prisma.product.findMany({
    where: { category: "SWEET" },
  });
  return <ProductContainer products={products}></ProductContainer>;
};

export default SweetPage;
