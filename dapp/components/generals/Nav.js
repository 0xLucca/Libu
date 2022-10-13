import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/imgs/logo.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import { IoWalletOutline } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import { IoMdCloseCircleOutline } from 'react-icons/io';
const Nav = ({ page }) => {
  const router = useRouter();
  const { address, isConnected } = useAccount();

  const [connected, setConnected] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);

  return (
    <div
      className={
        page === 'home'
          ? 'w-full flex justify-between absolute h-18 left-0 top-0 z-50'
          : 'bg-libuDarkGreen w-full flex justify-between absolute h-18 left-0 top-0 z-50'
      }
    >
      <div className="w-12 my-auto ml-6 cursor-pointer">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex text-libuWhite justify-end gap-10 mr-6">
        <div
          className={
            router.pathname == '/'
              ? 'h-fit font-inter font-semibold text-md text-libuGreen my-auto'
              : 'h-fit font-inter font-semibold text-md my-auto'
          }
        >
          <Link href="/">home</Link>
        </div>
        <div
          className={
            router.pathname == '/memberships'
              ? 'h-fit font-inter font-semibold text-md text-libuGreen my-auto'
              : 'h-fit font-inter font-semibold text-md w-fit my-auto'
          }
        >
          <Link href="/memberships">explorar</Link>
        </div>
        {connected && (
          <div
            className={
              router.pathname == '/mycollections'
                ? 'h-fit font-inter font-semibold text-md text-libuGreen my-auto'
                : 'h-fit font-inter font-semibold text-md w-fit my-auto'
            }
          >
            <Link href="/mycollections">mis colecciones</Link>
          </div>
        )}
        <div className="h-fit my-auto">
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
                          className="
                          bg-gradient-to-br
                          from-libuGreen
                          to-libuPink
                          text-md
                          font-inter
                          font-semibold
                          text-libuBlack
                          rounded-full
                          py-1.5
                          px-4
                          text-black
                          transition
                          duration-150
                          hover:bg-gradient-to-tl
                          "
                          onClick={openConnectModal}
                          type="button"
                        >
                          conectar wallet
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button
                          onClick={openChainModal}
                          type="button"
                          className="
                        bg-libuPink
                        rounded-full
                        text-black
                        font-sora
                        font-semibold
                        py-1
                        px-4
                        transition 
                        duration-300
                        hover:bg-gradient-to-br
                        hover:from-libuGreen
                        hover:to-libuPink
                        "
                        >
                          network incorrecta
                        </button>
                      );
                    }

                    return (
                      <div
                        className="
                      flex 
                      h-12
                      "
                      >
                        <div
                          className="
                          w-12 h-12
                          bg-gradient-to-br
                          from-libuGreen 
                          to-libuPink
                          rounded-full
                          absolute
                          flex
                          "
                        >
                          <IoWalletOutline
                            className="
                          text-black
                          m-auto 
                          text-2xl
                          "
                          />
                        </div>
                        <div
                          className="
                        cursor-pointer
                        flex 
                        h-[37px] 
                        w-[204px] 
                        rounded-full 
                        bg-gradient-to-r 
                        from-libuGreen 
                        to-libuPink 
                        my-auto
                        "
                        >
                          <div
                            className="
                            flex 
                            h-[33px] 
                            w-[200px] 
                            rounded-full
                          bg-libuDarkGreen
                            m-auto
                            "
                          >
                            <div
                              className="
                              ml-auto 
                              flex 
                              w-9/12 
                              h-fit 
                              my-auto
                            "
                            >
                              <p
                                className="
                                  text-md
                                  font-inter
                                  font-semibold
                                  m-auto
                              "
                                onClick={openAccountModal}
                              >
                                {account.displayName}
                              </p>
                              <div
                                className="w-6 h-6 m-auto"
                                onClick={openChainModal}
                              >
                                <Image
                                  src={chain.iconUrl}
                                  height="25"
                                  width="25"
                                  alt={chain.iconUrl}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
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
