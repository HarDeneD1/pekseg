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
    <div className="bg-black w-full px-10 py-5 flex justify-center items-center text-2xl text-amber-300">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-12">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/home">
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  className="rounded-full hover:bg-red-300 border"
                />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/home/products">TERMÉKEINK</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* ÜZLETEINK */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">ÜZLETEINK</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* RÓLUNK */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">RÓLUNK</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuViewport className="absolute bg-black top-full left-0 w-full mt-2 flex" />
      </NavigationMenu>
    </div>
  );
};

export default LayoutComponent;
