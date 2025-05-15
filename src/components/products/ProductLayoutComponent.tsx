"use client";

import React from "react";
import ButtonComponent from "@/components/products/ButtonComponent";
import { usePathname, useRouter } from "next/navigation";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useProductContext } from "@/app/context/queryContext";

const ProductLayoutComponent = () => {
  const { setQuery } = useProductContext();
  const path = usePathname();
  const router = useRouter();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const _query: string = data.query as string;

    setQuery(_query);
  }

  return (
    <div className="flex flex-col">
      <PlaceholdersAndVanishInput
        placeholders={[
          "Keress egy adott termék nevére ",
          "Vagy válassz a lenti kategóriák alapján",
        ]}
        onSubmit={(e) => onSubmit(e)}
        onChange={() => {
          router.push("/home/products/");
          setQuery("");
        }}
      ></PlaceholdersAndVanishInput>
      <div className="flex flex-row m-6">
        <ButtonComponent active={path === "/home/products/salty"}>
          Sós sütemények
        </ButtonComponent>
        <ButtonComponent active={path === "/home/products/sweet"}>
          Édes sütemények
        </ButtonComponent>
      </div>
    </div>
  );
};

export default ProductLayoutComponent;
