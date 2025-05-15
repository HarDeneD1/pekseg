"use client";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

const ButtonComponent: React.FC<{
  children: ReactNode;
  active: boolean;
}> = ({ children, active }) => {
  const router = useRouter();

  function handleClick() {
    if (children === "Sós sütemények") {
      router.push("/home/products/salty");
    } else {
      router.push("/home/products/sweet");
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`text-sotetbarna hover:text-black border p-5 rounded-xl text-center text-4xl mx-auto hover:cursor-pointer hover:bg-amber-200
        transition-colors duration-300 ${active && "bg-amber-200 text-sotetebbBarna border-2 shadow-sm"}`}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
