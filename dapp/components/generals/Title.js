import React from 'react';

const Title = ({ text }) => {
  return (
    <p
      className="         
        xl:w-11/12 
        lg:w-10/12 
        md:w-10/12 
        sm:w-10/12 
        w-10/12 
        mx-auto
        my-7
        font-inter
        font-bold
        text-libuWhite
        text-4xl 
        lg:text-5xl"
    >
      {text}
    </p>
  );
};

export default Title;
