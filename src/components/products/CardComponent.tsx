import React, { useEffect, useState } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Product } from "@prisma/client";
import { Spinner } from "@/components/ui/Spinner";

const CardComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const classNames = [
    "absolute top-40 left-[25%] rotate-[-7deg]",
    "absolute top-5 left-[40%] rotate-[8deg]",
    "absolute top-32 left-[55%] rotate-[10deg]",
    "absolute top-20 right-[35%] rotate-[2deg]",
    "absolute top-24 left-[45%] rotate-[-7deg]",
    "absolute top-8 left-[30%] rotate-[4deg]",
  ];

  useEffect(() => {
    setLoading(true);
    fetch("/api/product/all")
      .then((res) => res.json())
      .then((data) => setProducts(data.res));
    setLoading(false);
  }, []);
  let prevRand = 0;

  const data = products.map((product) => {
    let rand = Math.floor(Math.random() * (4 + 1));

    if (prevRand === rand) {
      rand = Math.floor(Math.random() * (4 + 1));
    }
    prevRand = rand;

    return {
      id: product.id,
      title: product.name,
      image: product.image,
      className: classNames[rand],
    };
  });

  if (loading) {
    return <Spinner className=" m-auto text-amber-300 text-4xl"></Spinner>;
  }

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip max-w-screen ">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Kóstolj bele a boldogságba!
      </p>
      {data.map((item) => (
        <DraggableCardBody
          className={`${item.className}  max-sm:w-50 max-sm:h-50 max-sm:p-2     `}
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.title}
            className="max-sm:w-50 max-sm:h-50 max-sm:p-1  pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
};

export default CardComponent;
