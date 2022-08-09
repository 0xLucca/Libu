import Image from 'next/image';
import React from 'react';

const NFTDesc = ({ nft }) => {
  return (
    <div className="p-3 md:w-10/12 m-3 md:m-auto lg:flex">
      <div className="mb-5 lg:mb-0 w-full">
        <div className="bg-libuWhite3 w-88 h-88 md:w-111 md:h-111 lg:w-96 lg:h-96 xl:w-126 xl:h-126 rounded-lg m-auto flex">
          <Image
            src={''}
            alt={''}
            className="w-full h-full object-center object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="w-88 h-88 md:w-111 md:h-111 lg:w-96 lg:h-96 xl:w-10/12 xl:h-126 m-auto">
          <div className="w-full h-full p-3">
            <div className="h-1/5 flex">
              <div className="my-auto">
                <h1 className="text-3xl font-inter font-bold text-libuWhite">
                  {nft.name}
                </h1>
                <h2 className="text-xl font-sora text-libuWhite3">
                  {nft.address}
                </h2>
              </div>
            </div>
            <div className="h-2/5 my-auto flex">
              <div className="my-auto w-4/5">
                <p className="text-lg font-sora text-libuWhite">
                  {nft.address}
                </p>
              </div>
            </div>
            <div className="h-2/5 my-auto flex">
              <div className="my-auto w-full">
                <div className="lg:flex">
                  <div className="flex shadow-md rounded border-libuPurple bg-libuWhite h-10 lg:w-1/2 mx-1 mb-1">
                    <div className="font-bold font-inter m-auto text-center text-xs md:text-left">
                      {nft.price} POL
                    </div>
                  </div>
                  <button
                    className="
                    shadow-md 
                    rounded                   
                    bg-libuGreen
                    hover:bg-libuBlue
                  hover:text-libuWhite
                    text-libuDark
                    h-10 
                    lg:w-1/2 
                    mx-1 
                    mb-1
                    flex 
                    items-center 
                    font-sora 
                    font-bold 
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
    </div>
  );
};

export default NFTDesc;
