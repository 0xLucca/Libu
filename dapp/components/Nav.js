import React from 'react';
import Link from 'next/link';

import { ConnectButton } from '@rainbow-me/rainbowkit';

const Nav = () => {
  return (
    <div className="bg-slate-200 flex justify-evenly content-center h-12">
      <div className="h-fit m-auto">
        <Link href="/">home</Link>
      </div>
      <div className="h-fit m-auto">
        <Link href="/places">places</Link>
      </div>
      <div className="h-fit m-auto">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Nav;
