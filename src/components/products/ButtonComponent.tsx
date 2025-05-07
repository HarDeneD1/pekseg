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
      className={`text-amber-300 border p-5 rounded-xl text-center text-4xl mx-auto hover:cursor-pointer hover:bg-amber-300
        transition-colors duration-300 hover:text-black ${active && "bg-amber-300 text-black"}`}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
