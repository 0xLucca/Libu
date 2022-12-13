import React from 'react';
import Image from 'next/image';
import img1 from '../../assets/imgs/CITYPNG.png';

const Hero = () => {
  return (
    <div className="w-11/12 lg:w-8/12 flex m-auto h-screen">
      <div className="w-full my-auto">
        <p className="uppercase font-inter font-black text-[135px] text-libuGreen leading-[140px]">
          libu
        </p>
        <p className="font-sora font-semibold text-[30px] text-libuWhite leading-[30px]">
          Un ecosistema web3 para tu empresa
        </p>
      </div>
      <div className="w-full my-auto hidden lg:block">
        <Image src={img1} alt="img hero"></Image>
      </div>
    </div>
  );
};

export default Hero;
