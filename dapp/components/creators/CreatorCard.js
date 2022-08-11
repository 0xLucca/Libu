import Link from 'next/link';
import React from 'react';

const CreatorCard = ({ creator }) => {
  return (
    <Link href={`/creators/${creator.address}?creator=${creator.address}`}>
      <div
        className="
        cursor-pointer
        mx-auto
        my-6
        w-96
        md:w-72
        xl:w-72
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
        <div className="">
          <div className="h-44 md:h-52 bg-libuWhite3 mx-1 mt-1 rounded"></div>
          <div className="mx-1 p-1">
            <h3 className="text-lg font-bold font-inter text-libuWhite truncate">
              {creator.address}
            </h3>
            <p className="truncate text-libuWhite3 font-sora text-sm">
              {creator.address}
            </p>
            <p className="text-libuWhite2 font-sora break-all hidden md:block text-card-text leading-3 my-auto">
              desc
            </p>
          </div>
          <div className="duration-100 bg-libuGreen m-1 h-10 rounded-md font-sora font-semibold text-libuBlack flex items-center justify-center hover:bg-libuBlue hover:text-libuWhite">
            conocer creador
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CreatorCard;
