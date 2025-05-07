import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardComponent = () => {
  return (
    <Card className="text-amber-300 bg-black hover:cursor-pointer  flex gap-2 hover:shadow-2xl hover:bg-amber-300 hover:text-black">
      <CardHeader className="">
        <CardTitle></CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
