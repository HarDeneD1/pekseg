"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.jpg";

const LayoutComponent = () => {
  return (
    <div className="bg-amber-100 w-full px-10 py-5 flex justify-center items-center text-2xl text-sotetbarna h-full">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-12 ">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/home">
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  className="rounded-full hover:bg-red-300 border-black border hover:border-1 hover:shadow-sm flex "
                />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/home/products"
                className=" hover:border-b-1 transition pb-1"
              >
                TERMÉKEINK
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* ÜZLETEINK */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/home/shops"
                className=" hover:border-b-1 transition pb-1"
              >
                ÜZLETEINK
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* RÓLUNK */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about" className=" hover:border-b-1 transition pb-1">
                RÓLUNK
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuViewport className="absolute bg-black top-full left-0 w-full mt-2 flex" />
      </NavigationMenu>
    </div>
  );
};

export default LayoutComponent;
