import Link from 'next/link';
import React from 'react';
import { Matic } from '@styled-icons/crypto';

const MembershipDescription = ({ nft }) => {
  console.log(nft);
  return (
    <div className="w-fit flex gap-6">
      <div className="bg-libuWhite m-auto w-88 h-88 md:w-111 md:h-111 lg:w-96 lg:h-96 xl:w-126 xl:h-126 rounded-lg"></div>
      <div className=" flex flex-col justify-between">
        <div className="">
          <h1 className="text-[50px] md:text-[72px] font-inter font-black text-libuWhite leading-none">
            {nft.name}
          </h1>
          <h2 className="text-sm md:text-[20px] font-sora text-libuDark">
            {nft.address}
          </h2>
        </div>
        <div className=" h-[40%] overflow-auto">
          <p className="text-lg font-sora text-libuWhite">
            jhdfklañfjka fjdkal ñfjka jfk lñajfkjdslñkf j kjlkdaf jk jkj j
            kflñja fkjañjddddd
          </p>
        </div>
        <div className="flex gap-3">
          <div
            className="h-[50px] w-full rounded bg-white flex text-black
                  font-sora
                  font-semibold
                  text-[20px]"
          >
            <p className="leading-none m-auto">{nft.price.slice(0, 2)}</p>
          </div>
          <button
            className="h-[50px] w-full rounded bg-libuGreen text-black font-sora text-[20px] font-semibold text-center
            transition duration-150       hover:bg-gradient-to-br
      from-libuGreen
      to-libuPink"
          >
            comprar
          </button>
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
