import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoNegative from '../../assets/imgs/logoNegative.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Nav = () => {
  return (
    <div className="bg-libuBlack flex h-16">
      <div className="md:w-4/12 lg:w-8/12 flex">
        <div className="w-12 my-auto ml-4 flex cursor-pointer">
          <Link href="/">
            <Image src={logoNegative} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="h-fit m-auto w-4/12 flex justify-evenly text-libuWhite">
        <div className="h-fit m-auto font-inter font-semibold text-md">
          <Link href="/">home</Link>
        </div>
        <div className="h-fit m-auto font-inter font-semibold text-md">
          <Link href="/memberships">memberships</Link>
        </div>
        <div className="h-fit m-auto">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted,
            }) => {
              return (
                <div
                  {...(!mounted && {
                    'aria-hidden': true,
                    style: {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!mounted || !account || !chain) {
                      return (
                        <button
                          className="bg-libuGreen
                          text-md
                          font-inter
                          font-semibold
                          text-md
                          text-libuBlack
                          rounded-full
                          py-1.5
                          px-4
                          hover:bg-libuBlue
                          hover:text-libuWhite
                          "
                          onClick={openConnectModal}
                          type="button"
                        >
                          Connect Wallet
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} type="button">
                          Wrong network
                        </button>
                      );
                    }

                    return (
                      <div className="flex gap-4">
                        <button
                          className="font-inter font-semibold"
                          onClick={openChainModal}
                          type="button"
                        >
                          {chain.name}
                        </button>

                        <button
                          className="font-inter font-semibold"
                          onClick={openAccountModal}
                          type="button"
                        >
                          {account.displayName}
                          {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ''}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
    </div>
  );
};

export default Nav;