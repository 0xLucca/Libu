import Link from 'next/link';
import React from 'react';
import { Matic } from '@styled-icons/crypto';

const MembershipDescription = ({ nft }) => {
  console.log(nft);
  return (
    <div className="w-9/12 lg:flex m-auto">
      <div className="flex m-auto">
        <div className="bg-libuWhite m-auto w-88 h-88 md:w-111 md:h-111 lg:w-96 lg:h-96 xl:w-126 xl:h-126 rounded-lg flex"></div>
      </div>
      <div className="lg:ml-10 w-full">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="">
            <h1 className="text-[50px] md:text-[72px] font-inter font-black text-libuWhite leading-[70px]">
              {nft.name}
            </h1>
            <h2 className="text-sm md:text-md font-sora text-libuWhite3">
              {nft.address}
            </h2>
          </div>
          <div className="h-full py-10 flex">
            <p className="text-lg font-sora text-libuWhite">
              jhdfklañfjka fjdkal ñfjka jfk lñajfkjdslñkf j kjlkdaf jk jkj j
              kflñja fkjañjddddd
            </p>
          </div>
          <div className="flex">
            <div className="my-auto w-full">
              <div className="lg:flex">
                <div
                  className="
                    flex 
                    shadow-md 
                    rounded 
                    border-libuPurple 
                    bg-libuWhite 
                    h-10 
                    w-full
                    mx-1 
                    mb-1
                    "
                >
                  <div
                    className="
                      font-bold 
                      font-inter 
                      m-auto 
                      text-center 
                      text-md
                      flex
                      "
                  >
                    <p className="flex my-auto">{nft.price.slice(0, 2)}</p>
                    <div className="w-6 h-6 ml-5 flex my-auto">
                      <Matic />
                    </div>
                  </div>
                </div>
                <button
                  className="
                    duration-100
                    shadow-md 
                    rounded                   
                    bg-libuGreen
                    hover:bg-libuBlue
                  hover:text-libuWhite
                    text-libuDark
                    h-10 
                    w-full
                    lg:w-1/2 
                    mx-1 
                    mb-1
                    flex 
                    text-md
                    items-center 
                    font-sora
                    font-semibold 
                    justify-center
                    "
                >
                  comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipDescription;

/*

                <Link href={`/creators/${nft.address}?creator=${nft.address}`}>
                  <h2 className="text-md font-sora text-libuWhite3 cursor-pointer">
                    {nft.address}
                  </h2>
                </Link>

*/
