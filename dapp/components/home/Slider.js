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
    <div id="heroInfo" className="h-screen z-40 relative mb-24">
      <div className="h-2/6 flex">
        <div className="w-screen m-auto flex flex-col md:flex-row text-center gap-4 md:gap-0 md:justify-evenly font-sora text-libuWhite text-sm md:text-lg">
          <a
            href="#heroInfo"
            onClick={() => handleSlide(0)}
            className={stateSlider === 0 && 'text-libuGreen'}
          >
            quienes somos
          </a>
          <a
            href="#heroInfo"
            onClick={() => handleSlide(1)}
            className={stateSlider === 1 && 'text-libuGreen'}
          >
            qué hacemos
          </a>
          <a
            href="#heroInfo"
            onClick={() => handleSlide(2)}
            className={stateSlider === 2 && 'text-libuGreen'}
          >
            qué buscamos
          </a>
          <a
            href="#heroInfo"
            onClick={() => handleSlide(3)}
            className={stateSlider === 3 && 'text-libuGreen'}
          >
            etapa del ecosistema
          </a>
        </div>
      </div>
      <div className="h-4/6 flex">
        <div className="m-auto shadow-xl rounded-lg w-11/12 md:w-10/12 h-full flex bg-libuBlack">
          <div className="w-10/12 h-5/6 m-auto">
            <div className="w-12/12 lg:w-9/12 h-full overflow-auto">
              <p
                className="font-inter text-libuWhite 
              text-[26px] 
              sm:text-[28px] 
              md:text-[30px] 
              lg:text-[33px] 
              xl:text-[36px] 
              font-semibold transition-opacity delay-700 duration-300"
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
                {/*dataToShow.text2*/}
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
