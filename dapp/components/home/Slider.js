import React, { useEffect, useRef, useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { data } from '../../data/dataSlider';

const Slider = ({ stateSlider, handleSlide }) => {
  const [slider, setSlider] = useState(stateSlider);
  const [dataToShow, setDataToShow] = useState({});

  useEffect(() => {
    setDataToShow({
      title: data[stateSlider].title,
      text: data[stateSlider].text,
      text2: data[stateSlider].text2,
      text3: data[stateSlider].text3,
      text4: data[stateSlider].text4,
      text5: data[stateSlider].text5,
      text6: data[stateSlider].text6,
    });
    setSlider(stateSlider);
  }, [stateSlider]);

  return (
    <div id="heroInfo" className="h-screen -mt-36 w-8/12 m-auto">
      <div className="h-1/6 flex justify-between font-sora text-libuWhite text-sm md:text-lg">
        <a
          href="#heroInfo"
          onClick={() => handleSlide(0)}
          className={stateSlider === 0 ? 'text-libuGreen my-auto' : 'my-auto'}
        >
          quienes somos
        </a>
        <a
          href="#heroInfo"
          onClick={() => handleSlide(1)}
          className={stateSlider === 1 ? 'text-libuGreen my-auto' : 'my-auto'}
        >
          qué hacemos
        </a>
        <a
          href="#heroInfo"
          onClick={() => handleSlide(2)}
          className={stateSlider === 2 ? 'text-libuGreen my-auto' : 'my-auto'}
        >
          qué buscamos
        </a>
        <a
          href="#heroInfo"
          onClick={() => handleSlide(3)}
          className={stateSlider === 3 ? 'text-libuGreen my-auto' : 'my-auto'}
        >
          etapa del ecosistema
        </a>
      </div>
      <div className="h-4/6 flex">
        <div className="m-auto shadow-2xl rounded-lg w-12/12 h-full flex bg-black z-40">
          <div className="w-11/12 h-4/6 m-auto">
            <div className="w-12/12 lg:w-10/12 h-full overflow-auto">
              <p
                className="font-inter text-libuWhite 
                uppercase
              text-[26px] 
              sm:text-[28px] 
              md:text-[30px] 
              lg:text-[33px] 
              xl:text-[36px] 
              font-black transition-opacity delay-700 duration-300"
              >
                {dataToShow.title}
              </p>
              <p
                className="font-sora text-libuWhite 
              text-[16px] 
              sm:text-[17px] 
              md:text-[18px] 
              font-regular mt-[30px] transition delay-700 duration-300"
              >
                {dataToShow.text}
              </p>
              <p
                className="font-sora text-libuWhite 
                text-[16px] 
                sm:text-[17px] 
                md:text-[18px] 
                font-regular mt-[30px] transition delay-700 duration-300"
              >
                {dataToShow.text2}
              </p>
              <p
                className="font-sora text-libuWhite 
              text-[16px] 
              sm:text-[17px] 
              md:text-[18px] 
              font-regular mt-[30px] transition delay-700 duration-300"
              >
                {dataToShow.text3}
              </p>
              <p
                className="font-sora text-libuWhite 
                text-[16px] 
                sm:text-[17px] 
                md:text-[18px] 
                font-regular mt-[30px] transition delay-700 duration-300"
              >
                {dataToShow.text4}
              </p>
              <p
                className="font-sora text-libuWhite 
                text-[16px] 
                sm:text-[17px] 
                md:text-[18px] 
                font-regular mt-[30px] transition delay-700 duration-300"
              >
                {dataToShow.text5}
              </p>
              <p
                className="font-sora text-libuWhite 
                text-[16px] 
                sm:text-[17px] 
                md:text-[18px] 
                font-regular mt-[30px] transition delay-700 duration-300"
              >
                {dataToShow.text6}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
