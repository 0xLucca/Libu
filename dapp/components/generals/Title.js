import React from 'react';

const Title = ({ text }) => {
  return (
    <p
      className=" 
        w-9/12 
        mx-auto
        my-7
        font-inter
        font-bold
        text-white
        text-4xl 
        lg:text-5xl
        "
    >
      {text}
    </p>
  );
};

export default Title;
