"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { WobbleCard } from "@/components/ui/wobble-card";
import logo from "../../public/logo.jpg";
import Image from "next/image";

const HomeComponent: React.FC = () => {
  const data = [
    {
      name: "Szezonalális termékek",
      quote: "Minden alkalomra",
      designation: "",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwz3o5aLiRUvktRbF2W3-KmieU-I8Z5hjwg&s",
    },
    {
      quote: "Laktózmentes, cukormentes gluténmentes termékek",
      name: "Mindenkire gondolva",
      designation: "",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkMPJKFxFZNrqZRM1PW9w72s1A7eROziTzQ&s",
    },
  ];
  return (
    <div className="h-screen w-full bg-amber-50 flex flex-col relative ">
      <div className="flex flex-row ml-10 mt-5">
        <Image
          height={500}
          className="rounded-full border border-black hover:shadow-5xl hover:border-2 hover:w-150 transition duration-600 "
          alt="dsd"
          src={logo}
        ></Image>

        <AnimatedTestimonials testimonials={data} autoplay />
      </div>
      <div className="mx-10 flex  flex-col gap-10 m-10">
        <WobbleCard containerClassName="bg-sotetbarna text-2xl text-black hover:text-amber-50">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Taxing Laughter: The Joke Tax Chronicles
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">dsaddsdio</p>
        </WobbleCard>
        <WobbleCard containerClassName="bg-sotetbarna text-2xl text-black hover:text-amber-50 text-end">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Taxing Laughter: The Joke Tax Chronicles
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">dsaddsdio</p>
        </WobbleCard>
        <WobbleCard containerClassName="bg-sotetbarna text-2xl text-black hover:text-amber-50">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Taxing Laughter: The Joke Tax Chronicles
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">dsaddsdio</p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default HomeComponent;
