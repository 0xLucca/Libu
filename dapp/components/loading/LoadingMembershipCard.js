import React, { useState } from 'react';

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
        border-libuWhite3
        flex
        flex-col
        "
    >
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
          2xl:h-[280px] bg-libuWhite3 mx-1 mt-1 rounded"
      ></div>

      <div className="flex mx-1 mb-1 mt-auto">
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
