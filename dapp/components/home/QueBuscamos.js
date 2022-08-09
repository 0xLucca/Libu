import React from 'react';

const QueBuscamos = () => {
  return (
    <div className="pt-7 pb-7 h-auto">
      <p className="font-inter font-bold text-libuWhite text-4xl lg:text-5xl ml-16">
        Qué buscamos
      </p>
      <p className="font-sora text-libuWhite2 sm:text-sm md:text-md lg:text-xl my-5 w-9/12 m-auto">
        {' '}
        La información es uno de los recursos más valiosos de la actualidad,
        blockchain es la tecnología que nos permite almacenar, financiar y
        transportar información de la forma más segura, descentralizada y
        escalable.
      </p>
      <p className="font-sora text-libuWhite2 sm:text-sm md:text-md lg:text-xl my-5 w-9/12 m-auto">
        {' '}
        Buscamos un mundo en donde la blockchain sea el intermediario en todas
        las interacciones humanas que se verían beneficiadas al implementar esta
        tecnología a través de un uso simplificado para el usuario.
      </p>
    </div>
  );
};

export default QueBuscamos;
