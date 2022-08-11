import React, { useState } from 'react';
import Image from 'next/image';

const LoadingMembershipCard = () => {
  const [loadingMembership, setLoadingMembership] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);
  return loadingMembership.map((membership) => (
    <div
      key={membership}
      className="
        animate-pulse
        select-none
        mx-auto
        my-6
        w-40
        md:w-52
        rounded-lg 
        shadow-lg 
        duration-200 
        hover:drop-shadow-xl
        border
        border-libuWhite3
        flex
        flex-col
        "
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
          <h3 className="text-lg font-bold font-inter text-libuBlack truncate">
            A
          </h3>
          <p className="text-libuBlack font-sora break-all hidden md:block text-card-text leading-3 my-auto h-6 overflow-auto">
            desc
          </p>
        </div>
      </div>

      <div className="flex m-1">
        <div
          className="
                  flex
                  rounded
                  bg-libuWhite3
                  h-10 
                  w-9/12"
        >
          <div className="m-auto"></div>
        </div>
        <div className="w-3/12 rounded ml-1 h-10 bg-libuWhite3"></div>
      </div>
    </div>
  ));
};

export default LoadingMembershipCard;
