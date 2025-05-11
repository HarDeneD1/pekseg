import React from "react";
import { Product } from "@prisma/client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import SimpleCardComponent from "@/components/products/SimpleCardComponent";
import { CalendarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const CardComponent: React.FC<{
  product: Product;
}> = ({ product }) => {
  return (
    <HoverCard openDelay={100} closeDelay={200}>
      <HoverCardTrigger asChild>
        <div className="transition hover:shadow-xl rounded-lg cursor-pointer">
          <SimpleCardComponent product={product} />
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-80 rounded-xl m-10 shadow-lg border p-4 bg-white dark:bg-gray-900"
        align="center"
        side="right"
        sideOffset={10}
      >
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              @{product.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Termék ára: {product.price} Ft
            </p>
            <div className="flex items-center pt-2 text-gray-500 text-xs">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
              <span>
                Hozzáadva: {new Date(product.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CardComponent;
