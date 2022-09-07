import React from 'react';
import Link from 'next/link';
import logoNegative from '../../assets/imgs/logoNegative.png';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { SiDiscord } from 'react-icons/si';

const Footer = () => {
  return (
    <div
      className="p-8 
    bg-libuGreen2
    z-40 
    relative
    flex
    flex-col
    md:flex-row
    justify-between
    "
    >
      <div className="flex flex-col md:flex-row gap-3 md:gap-16 text-libuWhite">
        <div className="w-14 my-auto cursor-pointer">
          <Link href="/">
            <a className="w-14 h-16">
              <Image src={logoNegative} alt="logo" />
            </a>
          </Link>
        </div>
        <div className="h-fit font-inter font-semibold text-md my-auto hover:text-libuGreen">
          <Link href="/">home</Link>
        </div>
        <div className="h-fit font-inter font-semibold text-md w-fit my-auto hover:text-libuGreen">
          <Link href="/memberships">explorar</Link>
        </div>
        <div className="h-fit font-inter font-semibold text-md w-fit my-auto hover:text-libuGreen">
          <Link href="/createevent">crear evento</Link>
        </div>
      </div>

      <div className="flex text-2xl gap-5 text-libuWhite mt-8 md:my-auto">
        <FaInstagram className="hover:text-libuGreen cursor-pointer" />
        <BsTwitter className="hover:text-libuGreen cursor-pointer" />
        <SiDiscord className="hover:text-libuGreen cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
