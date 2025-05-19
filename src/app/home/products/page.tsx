"use client";

import React, { useEffect, useState } from "react";
import { useProductContext } from "@/app/context/queryContext";
import { Product } from "@prisma/client";
import { Spinner } from "@/components/ui/Spinner";
import ProductContainer from "@/components/products/ProductContainer";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

const ProductsPage = () => {
  const { query } = useProductContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[] | null>([]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/product?query=` + query)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.res);
      });
    setLoading(false);
  }, [query]);

  if (loading) {
    return <Spinner className=" m-auto text-amber-300 text-4xl"></Spinner>;
  } else if (!query) {
    return null;
  } else if (products === null) {
    return (
      <div className="flex m-auto">
        <ContainerTextFlip
          className="flex bg-black  p-5"
          words={[
            `${query} nem található!`,
            "Próbálj más termékre keresni",
            "Vagy válassz a sós vagy édes kategóriákól",
          ]}
        />
      </div>
    );
  }
  if (products) {
    return <ProductContainer products={products}></ProductContainer>;
  }
};

export default ProductsPage;
