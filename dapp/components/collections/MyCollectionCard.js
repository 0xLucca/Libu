/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';

const MyCollectionCard = ({ nft }) => {
  const [collectible, setCollectible] = useState({});
  const [showOptions, setShowOptions] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    fetch(`${nft.tokenURI}`)
      .then((response) => response.json())
      .then((response) => {
        /*
        response.image = response.image.replace(
          'ipfs://',
          'https://ipfs.io/ipfs/'
        );
        */
        setCollectible(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nft]);

  useEffect(() => {
    console.log(showQr);
  }, [showQr]);

  return (
    <div
      className="
        mx-auto
        my-6
        w-40
        md:w-52
        rounded-lg 
        shadow-lg 
        duration-200 
        hover:drop-shadow-xl
        border
        border-libuGreen
        flex
        flex-col
        "
    >
      <div className="h-fit">
        {showOptions ? (
          <button
            onClick={() => {
              setShowOptions(!showOptions);
            }}
            className="absolute m-1 h-6 w-6 rounded bg-libuBlack border border-libuGreen hover:bg-libuGreen z-10"
          ></button>
        ) : (
          <div
            onMouseLeave={() => {
              setShowOptions(!showOptions);
            }}
            className="absolute m-1 w-32 rounded bg-libuBlack border border-libuGreen z-10 flex flex-col"
          >
            <button
              onClick={() => {
                setShowTransfer(!showTransfer);
              }}
              className="mx-2 my-1 text-libuGreen font-sora text-sm text-start"
            >
              transferir
            </button>
            <button
              onClick={() => {
                setShowQr(!showQr);
              }}
              className="mx-2 my-1 text-libuGreen font-sora text-sm text-start"
            >
              QR
            </button>
          </div>
        )}
        <div
          className={
            showQr
              ? 'h-44 md:h-52 bg-libuWhite mx-1 mt-1 rounded relative'
              : 'h-44 md:h-52 bg-libuWhite3 mx-1 mt-1 rounded relative'
          }
        >
          {showQr ? (
            <QRCode
              size={'100%'}
              value="https://reactjs.org/"
              renderAs="svg"
              className="m-auto h-44 md:h-52 rounded"
              bgColor="#FCF7F8"
              fgColor="#363732"
              includeMargin={true}
            />
          ) : (
            <Image layout="fill" src={collectible.image} />
          )}
          {showTransfer ? (
            <div>aaaa</div>
          ) : (
            <Image layout="fill" src={collectible.image} />
          )}
        </div>
        <div className="mx-1 p-1">
          <h3 className="text-lg font-bold font-inter text-libuWhite truncate">
            {collectible.name}
          </h3>
          <p className="text-libuWhite2 h-15 font-sora break-all hidden md:block text-card-text my-auto overflow-auto">
            {collectible.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCollectionCard;
