import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const MembershipCard = ({ nft }) => {
  return (
    <div
      className="
        cursor-pointer
        mx-auto
        my-6
        w-40
        md:w-52
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
        href={`/membershipDescription?address=${nft.address}&name=${nft.name}&expirationDuration=${nft.expirationDuration}&creationBlock=${nft.creationBlock}&tokenAddress=${nft.tokenAddress}&price=${nft.price}`}
      >
        <div className="">
          <div className="h-44 md:h-52 bg-libuWhite3 mx-1 mt-1 rounded">
            <Image
              src=""
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="mx-1 p-1">
            <h3 className="text-lg font-bold font-inter text-libuWhite truncate">
              {nft.name}
            </h3>
            <p className="text-libuWhite2 font-sora break-all hidden md:block text-card-text leading-3 my-auto h-6 overflow-auto">
              desc
            </p>
          </div>
        </div>
      </Link>

      <div className="flex m-1">
        <div
          className="
                  flex
                  rounded
                  bg-white
                  text-libuBlack
                  h-10 
                  w-9/12"
        >
          <div className="font-bold font-inter m-auto text-center text-xs md:text-left">
            {nft.price.slice(0, 2)} POL
          </div>
        </div>
        <div className="w-3/12 rounded ml-1 h-10 hover:bg-libuBlue bg-libuGreen hover:text-libuWhite flex items-center font-inter font-bold justify-center">
          +
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
