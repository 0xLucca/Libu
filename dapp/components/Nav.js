import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoNegative from '../assets/imgs/logoNegative.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Nav = () => {
  return (
    <div className="bg-libuDarkPurple flex h-12">
      <div className="w-6/12 flex">
        <div className="w-9 my-auto ml-2 flex cursor-pointer">
          <Link href="/">
            <Image src={logoNegative} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="h-fit m-auto w-6/12 flex justify-evenly text-libuGreen">
        <div className="h-fit m-auto"></div>
        <div className="h-fit m-auto">
          <Link href="/places">places</Link>
        </div>
        <div className="h-fit m-auto">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Nav;
