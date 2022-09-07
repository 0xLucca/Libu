import React from 'react';
import Image from 'next/image';
import img1 from '../../assets/imgs/CITYPNG.png';

const Hero = () => {
  return (
    <div className="py-24 z-40 relative">
      <div className="h-4/6 flex">
        <div className="w-12/12 lg:w-6/12 m-auto lg:my-auto flex">
          <div className="m-auto w-11/12 lg:w-10/12">
            <h1
              className="
              leading-[5rem]
              sm:leading-[6rem]
              lg:leading-[7rem]
              xl:leading-[6rem]
              font-inter 
              font-black 
              text-libuGreen
              text-[90px]
              sm:text-[120px]
              md:text-[120px]
              lg:text-[120px]
              xl:text-[110px]
              "
            >
              SOMOS LIBU
            </h1>
            <p
              className="
            font-sora
            font-semibold
            text-libuWhite
            text-[22px]
            sm:text-[25px]
            md:text-[30px]
            lg:text-[30px]
            xl:text-[30px]
            
            "
            >
              Un puente al ecosistema web3
            </p>
          </div>
        </div>
        <div className="lg:w-6/12 my-auto flex">
          <div className="w-[750px] m-auto hidden lg:block">
            <Image className="" src={img1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
