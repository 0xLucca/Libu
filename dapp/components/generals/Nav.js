import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoNegative from '../../assets/imgs/logoNegative.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import { IoWalletOutline } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import { IoMdCloseCircleOutline } from 'react-icons/io';
const Nav = () => {
  const router = useRouter();
  const { address, isConnected } = useAccount();

  const [connected, setConnected] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);

  return (
    <div className="bg-libuBlack flex justify-between h-18 sticky top-0 z-50">
      <div className="flex">
        <div className="w-12 my-auto ml-4 flex cursor-pointer">
          <Link href="/">
            <a>
              <Image src={logoNegative} alt="logo" />
            </a>
          </Link>
        </div>
      </div>

      <div className="lg:hidden w-6 h-6 my-auto mr-6 cursor-pointer text-libuWhite">
        <FiMenu
          className="hover:text-libuGreen text-2xl"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      {showMenu && (
        <div className="w-screen h-screen absolute bg-libuBlack">
          <div className="h-18 w-screen flex justify-between relative z-50">
            <div className="w-12 my-auto ml-4 flex cursor-pointer">
              <Link href="/">
                <a>
                  <Image src={logoNegative} alt="logo" />
                </a>
              </Link>
            </div>
            <div
              className="my-auto mr-6 flex text-libuWhite hover:text-libuGreen "
              onClick={() => setShowMenu(!showMenu)}
            >
              <IoMdCloseCircleOutline className="m-auto text-3xl cursor-pointer" />
            </div>
          </div>
          <div className="w-12/12 h-3/6 flex flex-col gap-8 ml-5 mt-5 text-libuWhite relative z-50">
            <div
              className={
                router.pathname == '/'
                  ? 'h-fit font-inter font-semibold text-md text-libuGreen'
                  : 'h-fit font-inter font-semibold text-md'
              }
            >
              <Link href="/">home</Link>
            </div>
            <div
              className={
                router.pathname == '/memberships'
                  ? 'h-fit font-inter font-semibold text-md text-libuGreen'
                  : 'h-fit font-inter font-semibold text-md w-fit'
              }
            >
              <Link href="/memberships">explorar</Link>
            </div>
            <div
              className={
                router.pathname == '/createevent'
                  ? 'h-fit font-inter font-semibold text-md text-libuGreen'
                  : 'h-fit font-inter font-semibold text-md w-fit'
              }
            >
              <Link href="/createevent">crear evento</Link>
            </div>
            {connected && (
              <div
                className={
                  router.pathname == '/mycollections'
                    ? 'h-fit font-inter font-semibold text-md text-libuGreen'
                    : 'h-fit font-inter font-semibold text-md w-fit'
                }
              >
                <Link href="/mycollections">mis colecciones</Link>
              </div>
            )}
            <div className="h-fit">
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
                          bg-gradient-to-r
                          from-[#88D0E0]
                          to-[#C49DD1]
                          text-md
                          font-inter
                          font-semibold
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
                              conectar wallet
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
                          <div
                            className="
                      flex 
                      h-12
                      "
                          >
                            <div
                              className="
                          w-12 h-12
                          bg-gradient-to-r
                          from-[#88D0E0]
                          to-[#C49DD1]
                          rounded-full
                          absolute
                          flex
                          "
                            >
                              <IoWalletOutline
                                className="
                          text-libuBlack 
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
                        from-[#88D0E0] 
                        to-[#C49DD1] 
                        my-auto
                        "
                            >
                              <div
                                className="
                            flex 
                            h-[33px] 
                            w-[200px] 
                            rounded-full
                          bg-libuBlack
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
      )}

      <div className="hidden lg:flex text-libuWhite justify-end gap-16 pr-12">
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
        <div
          className={
            router.pathname == '/createevent'
              ? 'h-fit font-inter font-semibold text-md text-libuGreen my-auto'
              : 'h-fit font-inter font-semibold text-md w-fit my-auto'
          }
        >
          <Link href="/createevent">crear evento</Link>
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
                          bg-gradient-to-r
                          from-[#88D0E0]
                          to-[#C49DD1]
                          text-md
                          font-inter
                          font-semibold
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
                          conectar wallet
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
                      <div
                        className="
                      flex 
                      h-12
                      "
                      >
                        <div
                          className="
                          w-12 h-12
                          bg-gradient-to-r
                          from-[#88D0E0]
                          to-[#C49DD1]
                          rounded-full
                          absolute
                          flex
                          "
                        >
                          <IoWalletOutline
                            className="
                          text-libuBlack 
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
                        from-[#88D0E0] 
                        to-[#C49DD1] 
                        my-auto
                        "
                        >
                          <div
                            className="
                            flex 
                            h-[33px] 
                            w-[200px] 
                            rounded-full
                          bg-libuBlack
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
