import React from 'react';
import Image from 'next/image';
import img1 from '../../assets/imgs/about-2.png';

const Hero = () => {
  return (
    <div className="h-screen flex">
      <div className="m-auto w-10/12 md:w-8/12 lg:w-10/12 flex flex-col justify-center">
        <h1 className="font-inter text-8xl md:text-9xl font-black mb-7 text-libuGreen">
          We are LIBU
        </h1>
        <p className="font-sora font-medium text-4xl md:text-5xl text-libuWhite">
          Te invitamos a que conozcas nuestro proyecto
        </p>
      </div>
    </div>
  );
};

export default Hero;
