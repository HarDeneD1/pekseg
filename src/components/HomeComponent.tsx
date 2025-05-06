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
    <div className=" min-h-screen w-full bg-amber-50 flex flex-col  ">
      <div className="flex flex-row ml-10 mt-5">
        <div className="flex basis-1/4">
          <Image
            height={500}
            className="rounded-full w-full h-full border border-black hover:shadow-5xl hover:border-2 transition border-sotetbarna   "
            alt="dsd"
            src={logo}
          ></Image>
        </div>
        <div className="flex basis-2/3">
          <AnimatedTestimonials testimonials={data} autoplay />
        </div>
      </div>
      <div className="mx-10 flex  flex-col gap-10 m-10">
        <WobbleCard containerClassName="bg-sotetbarna text-2xl text-black hover:text-amber-50">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Frissen sütve. Minden nap.
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify ">
            Nálunk a kenyér több mint élelmiszer – ez egy életérzés. Minden
            reggel hajnalban kezdjük a munkát, hogy Te már illatos, ropogós
            pékáruval indíthasd a napodat! <br className="" />
            <br />
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="bg-sotetbarna text-2xl text-black hover:text-amber-50 text-end">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Friss – Helyi – Valódi
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Minden termékünk Szentmiklóson készül, frissen, a nap minden
            szakaszában
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="bg-sotetbarna text-2xl text-black hover:text-amber-50 mb-10">
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
