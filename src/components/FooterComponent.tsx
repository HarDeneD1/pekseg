import React from "react";
import logo from "@/../public/logo.jpg";
import Image from "next/image";
import { FacebookIcon, InstagramIcon } from "lucide-react";

const FooterComponent = () => {
  return (
    <footer className="z-10 bg-sotetebbBarna text-white py-8 w-full flex align-bottom">
      <div className="max-w-6xl mx-auto flex flex-row justify-evenly w-full text-center">
        <div className="flex">
          <Image
            height={100}
            alt={"logo"}
            src={logo}
            className="rounded"
          ></Image>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Szentmiklósi pékség</h2>
          <p className="text-sm">
            © {new Date().getFullYear()} Cégnév. Minden jog fenntartva.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Kövess minket</h3>
          <div className="flex flex-col text-center items-center align-middle w-full gap-5 ">
            <a
              href={
                "https://www.facebook.com/p/Szentmikl%C3%B3si-P%C3%A9ks%C3%A9g-100057521586530/"
              }
              className="hover:text-amber-200"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href={"https://www.instagram.com/szentmiklosi_pekseg/"}
              className="hover:text-amber-200"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
