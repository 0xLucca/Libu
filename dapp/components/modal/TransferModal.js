import React, { useEffect, useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const TransferModal = () => {
  return (
    <div className="z-50 w-screen h-screen absolute top-0 left-0 flex backdrop-blur-sm">
      <div className="m-auto bg-libuBlack border border-libuGreen rounded-md">
        <div className="m-2 flex">
          <button
            className="p-1 text-xl rounded ml-auto border border-libuGreen text-libuGreen font-sora font-medium hover:bg-libuGreen hover:text-libuBlack"
            onClick={() => {
              ht();
            }}
          >
            <IoMdCloseCircleOutline />
          </button>
        </div>
        <div className="w-56 h-56 md:w-96 md:h-96 m-2">hola</div>
      </div>
    </div>
  );
};

export default TransferModal;
