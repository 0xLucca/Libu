import Head from 'next/head';
import Nav from '../components/generals/Nav';
import Hero from '../components/home/Hero';
import Footer from '../components/generals/Footer';
import Slider from '../components/home/Slider';
import { useEffect, useState } from 'react';

const Home = () => {
  const [stateSlider, setStateSlider] = useState(0);

  const handleSlide = (n) => {
    //console.log(n);
    setStateSlider(n);
  };

  useEffect(() => {}, [stateSlider]);

  //<div className="w-[25rem] h-[25rem] absolute bg-libuGreen top-[80rem] lg:top-[90rem] left-[5rem] rounded-full opacity-30 blur-[100px]"></div>
  return (
    <div className="bg-libuBlack min-h-screen max-w-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Slider handleSlide={handleSlide} stateSlider={stateSlider} />
      <div className="w-[25rem] h-[25rem] absolute bg-[#A57BEA] top-[45rem] lg:top-[55rem] right-0 rounded-full opacity-30 blur-[150px]"></div>
      <div className="w-[25rem] h-[25rem] absolute bg-libuBlue top-[19rem] lg:top-[29rem] -left-[10rem] rounded-full opacity-30 blur-[100px]"></div>
      <Footer />
    </div>
  );
};

export default Home;
