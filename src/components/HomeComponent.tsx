"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { WobbleCard } from "@/components/ui/wobble-card";
import logo from "../../public/logo.jpg";
import Image from "next/image";
import { motion } from "motion/react";

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
            className="rounded-full w-full h-full border border-black hover:shadow-5xl hover:border-2 transition border-sotetbarna"
            alt="dsd"
            src={logo}
          ></Image>
        </div>
        <div className="flex basis-2/3">
          <AnimatedTestimonials testimonials={data} autoplay />
        </div>
      </div>
      <div className="mx-10 flex  flex-col gap-10 m-10">
        <WobbleCard containerClassName="bg-amber-100 text-2xl text-sotetbarna hover:text-sotetebbBarna">
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
        <WobbleCard containerClassName="bg-amber-100 text-2xl text-sotetbarna hover:text-sotetebbBarna text-end">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Friss – Helyi – Valódi
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Minden termékünk Szentmiklóson készül, frissen, a nap minden
            szakaszában!
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="bg-amber-100 text-2xl text-sotetbarna hover:text-sotetebbBarna">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Ahol a frissesség otthonra talál!
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Pékségünk szívvel-lélekkel készített termékei a hagyomány és az
            innováció tökéletes egyensúlyát hozzák el az asztalodra. Legyen szó
            ropogós kenyerekről, illatos péksüteményekről vagy egyedi, házi
            recept alapján készült finomságokról!
          </p>
        </WobbleCard>

        <motion.div
          className="flex mx-auto m-10 font-medium"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="scroll-m-20 text-sotetbarna text-4xl font-extrabold tracking-tight lg:text-5xl m-10">
            Kóstolj bele a valódi ízekbe – várunk szeretettel!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeComponent;
