/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import QRCode from 'qrcode.react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const QRmodal = ({ QRUrl, handleshowQR }) => {
  return (
    <div className="z-50 w-screen h-screen absolute top-0 left-0 flex backdrop-blur-sm">
      <div className="m-auto bg-libuBlack border border-libuGreen rounded-md">
        <div className="m-2 flex">
          <button
            className="p-1 text-xl rounded ml-auto border border-libuGreen text-libuGreen font-sora font-medium hover:bg-libuGreen hover:text-libuBlack"
            onClick={() => handleshowQR()}
          >
            <IoMdCloseCircleOutline />
          </button>
        </div>
        <div className="w-56 h-56 md:w-96 md:h-96 m-2">
          <QRCode
            size={'100%'}
            value={QRUrl}
            renderAs="svg"
            className="rounded z-50"
            bgColor="#FCF7F8"
            fgColor="#363732"
            includeMargin={true}
          />
        </div>
      </div>
    </div>
  );
};

export default QRmodal;
