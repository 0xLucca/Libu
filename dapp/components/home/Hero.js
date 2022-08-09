import React from 'react';
import Image from 'next/image';
import img1 from '../../assets/imgs/about-2.png';

const Hero = () => {
  return (
    <div className="h-screen flex">
      <div className="w-10/12 md:w-8/12 m-auto flex flex-col justify-center">
        <h1 className="font-inter text-9xl font-bold mb-5 mx-auto md:ml-20 text-libuGreen">
          We are LIBU
        </h1>
        <p className="font-sora text-5xl mx-auto md:ml-20 text-center md:text-left text-libuWhite">
          Te invitamos a que conozcas nuestro proyecto
        </p>
      </div>
      <div className="w-6/12 hidden md:flex m-auto">
        <div className="h-96">
          <Image src={img1} alt="img hero" className="h-96 ml-16 my-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
