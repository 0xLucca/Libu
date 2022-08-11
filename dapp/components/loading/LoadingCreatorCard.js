import React, { useState } from 'react';

const LoadingCreatorCard = () => {
  const [loadingCreator, setLoadingCreator] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);
  return loadingCreator.map((creator) => (
    <div
      key={creator}
      className="
      animate-pulse
      select-none
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
        border-libuWhite3
        flex
        flex-col
        "
    >
      <div className="">
        <div className="h-44 md:h-52 bg-libuWhite3 mx-1 mt-1 rounded"></div>
        <div className="mx-1 p-1 text-libuBlack">
          <h3 className="text-lg font-bold font-inter truncate">a</h3>
          <p className="truncate font-sora text-sm">a</p>
          <p className=" font-sora break-all hidden md:block text-card-text leading-3 my-auto">
            a
          </p>
        </div>
        <div className="duration-100 bg-libuWhite3 m-1 h-10 rounded-md"></div>
      </div>
    </div>
  ));
};

export default LoadingCreatorCard;
