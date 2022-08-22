/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { useAccount, useNetwork } from 'wagmi';
import { useSignMessage } from 'wagmi';

const MyCollectionCard = ({ nft }) => {
  const [collectible, setCollectible] = useState({});
  const [showOptions, setShowOptions] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [signature, setSignature] = useState("");
  const [payload, setPayload] = useState("");
  const [account, setAccount] = useState("");
  const [accountToTransfer, setAccountToTransfer] = useState('');

  //Llevar a la page y pasar como parametro a la card
  const { address, isConnected } = useAccount({
    onDisconnect(address){
      setAccount("");
    }
  });

  useEffect(()=>{
    setAccount(address);
  },[address])
  //const { network } = useNetwork();
  const network = 137;

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

  const QRUrl = () => {
    const url = new URL(`https://app.unlock-protocol.com/verification`);
    const data = encodeURIComponent(signature.payload);
    const sig = encodeURIComponent(signature.data);
    url.searchParams.append('data', data);
    url.searchParams.append('sig', sig);
    // eslint-disable-next-line no-console
    console.log(url.toString()); // debugging
    return url.toString();
  };

  const createPayload = () => {
    try {
      if(network==="" || account===""){
        console.log("Account was not detected")
        return 
      }
        
      const payload = JSON.stringify({
        network: network,
        account: account,
        lockAddress: nft.lock.address,
        timestamp: Date.now(),
        tokenId: nft.keyId,
      });

      setPayload(payload);

      signMessage();
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: payload,
    onSettled(data, error) {
      console.log(`Data: ${data}`);
      setSignature({
        payload,
        data,
      });
      setShowQr(!showQr);
    },
  });

  if (showQr) {
    return (
      <div className="absolute backdrop-blur-sm z-50 m-auto h-screen w-screen top-0 left-0 flex">
        <div className="bg-libuBlack p-7 border border-libuGreen rounded-md h-fit m-auto">
          <div className="mb-2 flex justify-between">
            <button
              onClick={() => setShowQr(!showQr)}
              className="font-sora font px-3 py-1 rounded text-libuGreen border border-libuGreen hover:bg-libuGreen hover:text-libuBlack"
            >
              x
            </button>
          </div>
          <QRCode
            size={'100%'}
            value={QRUrl()}
            renderAs="svg"
            className="m-auto h-96 w-96 rounded"
            bgColor="#FCF7F8"
            fgColor="#363732"
            includeMargin={true}
          />
        </div>
      </div>
    );
  } else if (showTransfer) {
    return (
      <div className="absolute backdrop-blur-sm z-50 m-auto h-screen w-screen top-0 left-0 flex">
        <div className="bg-libuBlack p-7 border border-libuGreen rounded-md h-fit m-auto">
          <div className="mb-2 flex justify-between">
            <button
              onClick={() => setShowTransfer(!showTransfer)}
              className="font-sora font px-3 py-1 rounded text-libuGreen border border-libuGreen hover:bg-libuGreen hover:text-libuBlack"
            >
              x
            </button>
          </div>
          <div>
            <p className="font-sora font text-libuGreen my-5">
              Transferir a la cuenta:
            </p>
            <form className="flex flex-col">
              <input
                type="text"
                className="p-1 rounded w-96 mb-5"
                placeholder="0x0000000000000000000000000000000000000000"
                onChange={(e) => {
                  //CUANDO CAMBIA LO GUARDA EN EL STATE
                  setAccountToTransfer(e.target.value);
                }}
              ></input>
              <button
                type="button"
                onClick={() => {
                  //FUNCION QUE ENVIA
                  console.log(accountToTransfer);
                }}
                className="font-sora font px-3 py-2 rounded text-libuGreen border border-libuGreen hover:bg-libuGreen hover:text-libuBlack"
              >
                Transferir
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
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
          {!showOptions ? (
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
                  createPayload();
                }}
                className="mx-2 my-1 text-libuGreen font-sora text-sm text-start"
              >
                QR
              </button>
              <button
                onClick={() => {
                  setShowTransfer(!showTransfer);
                }}
                className="mx-2 my-1 text-libuGreen font-sora text-sm text-start"
              >
                Transferir
              </button>
            </div>
          )}
          <div className="h-44 md:h-52 bg-libuWhite3 mx-1 mt-1 rounded relative">
            <Image layout="fill" src={collectible.image} />
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
  }
};

export default MyCollectionCard;
