"use client";

import React from "react";
import Carousel from "@/components/ui/carousel";

const ShopMainComponent = () => {
  const data = [
    {
      title: "Példa bolt név",
      button: "Útvonalterv",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_nm8kxJTHx10VRV7jIGE2n6_jhCI2X5lJw&s",
      onClick: () => {
        window.open("https://maps.app.goo.gl/mmtqrkShY5Us9hFE8");
      },
    },
    {
      title: "Másik példa bolt",
      button: "Útvonalterv",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPN3kJx2wyrE3u2F0RKEoZABEhy0pJlS4yA&s",
      onClick: () => {
        window.open("https://maps.app.goo.gl/PVy9xbrA7XUUcs8t9");
      },
    },
  ];
  return (
    <div className="flex m-10">
      <Carousel slides={data}></Carousel>
    </div>
  );
};

export default ShopMainComponent;
