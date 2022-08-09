import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const MembershipCard = ({ nft }) => {
  return (
    <Link
      href={`/nftDesc?address=${nft.address}&name=${nft.name}&expirationDuration=${nft.expirationDuration}&creationBlock=${nft.creationBlock}&tokenAddress=${nft.tokenAddress}&price=${nft.price}`}
    >
      <div
        className="
        m-auto 
        xl:my-5
        lg:my-4
        md:my-3
        my-2
        cursor-pointer
        "
      >
        <div
          className="
        w-40
        h-60
        md:w-52
        md:h-80
        rounded-md 
        shadow-md 
        overflow-hidden 
        duration-200 
        hover:drop-shadow-xl
        border
        border-libuWhite
        "
        >
          <div className="w-full h-full relative">
            <Image
              src=""
              alt=""
              className="w-full h-full object-center object-cover"
            />
            {/*<div className="absolute rounded-md inset-x-0 bottom-0 bg-gradient-to-t from-libuBlue w-full h-1/2"></div>*/}
            <div className="absolute inset-x-0 bottom-0">
              <div className="rounded bg-libuWhite m-1 p-1 text-libuBlack">
                <h3 className="font-bold font-inter text-card-title truncate">
                  {nft.name}
                </h3>
                <p className="font-sora break-all hidden md:block text-card-text leading-3 my-auto h-6 overflow-auto">
                  desc
                </p>
              </div>
              <div className="flex">
                <div
                  className="
                  flex 
                  shadow-md 
                  rounded 
                  bg-libuDarkPurple
                  hover:bg-libuGreen
                  text-libuWhite
                  hover:text-libuDarkPurple
                  h-10 
                  w-full 
                  mx-1 
                  mb-1"
                >
                  <div className="font-bold font-inter m-auto text-center text-xs md:text-left">
                    {nft.price} POL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MembershipCard;
