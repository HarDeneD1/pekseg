"use client";

import React, { useEffect, useState } from "react";
import { useProductContext } from "@/app/context/queryContext";
import { Product } from "@prisma/client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Spinner } from "@/components/ui/Spinner";
import ProductContainer from "@/components/products/ProductContainer";

const ProductsPage = () => {
  const { query, setQuery } = useProductContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/product?query=" + query)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.res);
        setLoading(false);
      });
  }, [query]);

  if (loading) {
    return <Spinner className=" m-auto text-amber-300 text-4xl"></Spinner>;
  } else if (!query) {
    return null;
  } else if (products && products.length > 0) {
    return <ProductContainer products={products}></ProductContainer>;
  } else if (!products) {
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
};

export default ProductsPage;
