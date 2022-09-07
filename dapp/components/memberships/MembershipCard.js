import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Matic } from '@styled-icons/crypto';
import { FiArrowRightCircle } from 'react-icons/fi';
const MembershipCard = ({ nft }) => {
  console.log(nft);
  return (
    <div
      className="
        cursor-pointer
        my-6
        w-[280px]
        h-[380px]
        sm:w-[240px]
        sm:h-[340px]
        md:w-[280px]
        md:h-[420px]
        lg:w-[250px]
        lg:h-[390px]
        xl:w-[270px]
        xl:h-[410px]
        2xl:w-[290px]
        2xl:h-[410px]
        rounded-lg 
        shadow-lg 
        duration-200 
        hover:drop-shadow-xl
        border
        border-libuGreen
        flex
        flex-col
        "
    >
      <Link
        href={`/memberships/${nft.name}?address=${nft.address}&name=${nft.name}&expirationDuration=${nft.expirationDuration}&creationBlock=${nft.creationBlock}&tokenAddress=${nft.tokenAddress}&price=${nft.price}`}
      >
        <div className="">
          <div
            className="
          w-[270px] 
          h-[270px]
          sm:w-[230px] 
          sm:h-[230px]
          md:w-[270px] 
          md:h-[270px]
          lg:w-[240px] 
          lg:h-[240px]
          xl:w-[260px] 
          xl:h-[260px]
          2xl:w-[280px] 
          2xl:h-[280px]
           bg-libuWhite mx-1 mt-1 rounded"
          >
            <Image alt="image"></Image>
          </div>
          <div className="mx-1 my-2 p-1">
            <h3 className="text-xl font-bold font-sora text-libuWhite truncate">
              {nft.name}
            </h3>
            <p className="hidden md:block text-libuWhite2 font-sora break-all text-card-text leading-3 my-auto h-6 overflow-auto">
              desc
            </p>
          </div>
        </div>
      </Link>

      <div className="flex mx-1 mb-1 mt-auto">
        <div
          className="
                  flex
                  rounded
                  bg-white
                  text-libuBlack
                  h-11 
                  w-10/12"
        >
          <div className="flex font-bold font-inter m-auto text-md md:text-left">
            <p className="ml-3 flex leading-none my-auto">
              {nft.price.slice(0, 2)}
            </p>
            <div className="w-5 ml-2 my-auto flex">
              <Matic />
            </div>
          </div>
        </div>
        <Link
          href={`/memberships/${nft.name}?address=${nft.address}&name=${nft.name}&expirationDuration=${nft.expirationDuration}&creationBlock=${nft.creationBlock}&tokenAddress=${nft.tokenAddress}&price=${nft.price}`}
        >
          <div className="duration-100 text-2xl w-11 rounded ml-1 h-11 hover:bg-libuBlue bg-libuGreen hover:text-libuWhite flex items-center font-inter font-bold justify-center">
            <FiArrowRightCircle />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MembershipCard;
