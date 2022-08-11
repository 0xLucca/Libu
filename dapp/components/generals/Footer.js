import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="p-7">
      <div className="h-full w-11/12 border-t m-auto border-libuWhite3">
        <div className="py-7 px-3 md:p-7 flex">
          <Link href="/">
            <p className="text-libuGreen font-inter my-auto font-black text-5xl cursor-pointer">
              LIBU
            </p>
          </Link>
        </div>
        <div className="flex">
          <div className="w-6/12 h-full">
            <div className="ml-7 text-md md:text-lg md:ml-16 flex flex-col">
              <a
                href="#"
                className="
                w-fit
                font-sora 
                text-libuWhite2 
                font-medium
                hover:text-libuGreen
                "
              >
                Quienes somos
              </a>
              <a
                href="#"
                className="
                w-fit
                font-sora 
                text-libuWhite2 
                font-medium
                hover:text-libuGreen
                "
              >
                Qué hacemos
              </a>
              <a
                href="#"
                className="
                w-fit
                font-sora 
                text-libuWhite2 
                font-medium
                hover:text-libuGreen
                "
              >
                Qué buscamos
              </a>
              <a
                href="#"
                className="
                w-fit
                font-sora 
                text-libuWhite2 
                font-medium
                hover:text-libuGreen
                "
              >
                Etapa del ecosistema
              </a>
            </div>
          </div>
          <div className="w-6/12">
            <div className="ml-7 text-md md:text-lg md:ml-16 flex flex-col">
              <a
                href="#"
                className="
                w-fit
                font-sora 
                text-libuWhite2 
                font-medium
                hover:text-libuGreen
                "
              >
                Twitter
              </a>
              <a
                href="#"
                className="
                w-fit
                font-sora 
                text-libuWhite2 
                font-medium
                hover:text-libuGreen
                "
              >
                Instagram
              </a>
              <a
                href="#"
                className="
                w-fit
                font-sora 
                text-libuWhite2 
                font-medium
                hover:text-libuGreen
                "
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
