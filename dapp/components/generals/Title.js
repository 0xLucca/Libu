import React from 'react';

const Title = ({ text }) => {
  return (
    <p
      className=" 
        w-full
        font-inter
        font-black
        text-white
        text-[64px]
        uppercase
        leading-none
        "
    >
      {text}
    </p>
  );
};

export default Title;
