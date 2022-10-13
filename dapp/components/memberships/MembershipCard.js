import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Matic } from '@styled-icons/crypto';
import { FiArrowRightCircle } from 'react-icons/fi';

const MembershipCard = ({ nft }) => {
  console.log(nft);
  return (
    <div
      className="p-[2px] 
      bg-libuGreen 
      rounded-lg 
      cursor-pointer
      shadow-lg 
      transition
      duration-200 
      hover:drop-shadow-xl
      hover:bg-gradient-to-br
      from-libuGreen
      to-libuPink
      "
    >
      <div
        className="
        p-[5px]
        rounded-lg 
        flex
        flex-col
        bg-libuDarkGreen
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
           bg-libuWhite 
           rounded
           "
            >
              <Image alt="image"></Image>
            </div>
            <div
              className="
              my-2
              w-[270px] 
              sm:w-[230px] 
              md:w-[270px] 
              lg:w-[240px] 
              xl:w-[260px] 
              2xl:w-[280px] 
            "
            >
              <h3 className="text-[24px] leading-none font-extrabold font-sora text-libuWhite truncate">
                {nft.name}
              </h3>
              <p className="mt-1 text-white font-sora break-all text-card-text leading-3 h-8 overflow-auto">
                desc
              </p>
            </div>
          </div>
        </Link>

        <div className="flex">
          <div
            className="
                  flex
                  rounded
                  bg-white
                  h-[40px]
                  w-full
                  text-black
                  font-sora
                  font-semibold
                  text-[20px]

                  "
          >
            <p className="leading-none m-auto">{nft.price.slice(0, 2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
