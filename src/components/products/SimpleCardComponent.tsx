import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Product } from "@prisma/client";

const SimpleCardComponent = ({ product }: { product: Product }) => {
  return (
    <Card className="items-center text-3xl justify-evenly transition-colors duration-300 text-amber-300 bg-black hover:cursor-pointer flex gap-2 hover:shadow-4xl hover:bg-amber-300 hover:text-black">
      <CardHeader className="flex h-75 w-75">
        <Image
          className="border border-amber-300 rounded "
          fill
          src={product.image}
          alt={product.name}
        ></Image>
      </CardHeader>
      <CardContent>
        <p>{product.name}</p>
      </CardContent>
      <CardFooter>
        <p>
          <b>{product.price} </b>Ft/db
        </p>
      </CardFooter>
    </Card>
  );
};

export default SimpleCardComponent;
