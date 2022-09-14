/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useSignMessage } from 'wagmi';
import { RiQrCodeLine } from 'react-icons/ri';
import { IoArrowRedoCircleOutline } from 'react-icons/io5';

const MyCollectionCard = ({ nft, handleQR }) => {
  const [collectible, setCollectible] = useState({});
  const [signature, setSignature] = useState('');
  const [account, setAccount] = useState('');
  const [url, seturl] = useState('');
  let payload;

  const { address, isConnected } = useAccount({
    onDisconnect(address) {
      setAccount('');
    },
  });

  useEffect(() => {
    setAccount(address);
  }, [address]);

  useEffect(() => {
    signature != '' && seturl(QRUrl());
  }, [signature]);

  useEffect(() => {
    url != '' && handleQR(url, true );
  }, [url]);

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
      if (network === '' || account === '') {
        console.log('Account was not detected');
        return;
      }

      const _payload = JSON.stringify({
        network: network,
        account: account,
        lockAddress: nft.lock.address,
        timestamp: Date.now(),
        tokenId: nft.keyId,
      });

      payload = _payload;

      return _payload;
    } catch (error) {
      console.log(error);
    }
  };

  const { signMessage } = useSignMessage({
    message: createPayload(),
    onSettled(data, error) {
      //console.log(`Data: ${data}`);
      setSignature({
        payload: payload,
        data: data,
      });
    },
  });

  return (
    <div
      className="
      transition-all
      select-none
      my-6
      w-[280px]
      h-[380px]
      sm:w-[240px]
      sm:h-[340px]
      md:w-[280px]
      md:h-[420px]
      lg:w-[250px]
      lg:h-[390px]
      xl:w-[270px]
      xl:h-[410px]
      2xl:w-[290px]
      2xl:h-[410px]
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
      <div
        className="
        w-[270px] 
        h-[270px]
        sm:w-[230px] 
        sm:h-[230px]
        md:w-[270px] 
        md:h-[270px]
        lg:w-[240px] 
        lg:h-[240px]
        xl:w-[260px] 
        xl:h-[260px]
        2xl:w-[280px] 
        2xl:h-[280px] 
        bg-libuWhite 
        mx-1 mt-1 
        rounded
        relative
        "
      >
        <Image
          layout="fill"
          //src="data:image/gif;base64,R0…AAAALAAAAAABAAEAAAIBRAA7"
          src={collectible.image}
          decoding="async"
          data-nimg="fill"
        />
      </div>

      <div className="mx-1 my-2 p-1">
        <h3 className="text-xl font-bold font-sora text-libuWhite truncate">
          {collectible.name}
        </h3>
        <p className="hidden md:block text-libuWhite2 font-sora break-all text-card-text leading-3 my-auto h-6 overflow-auto">
          {collectible.description}
        </p>
      </div>

      <div className="flex mx-1 mb-1 mt-auto">
        <div
          className="cursor-pointer hover:bg-libuBlue transition duration-200 w-10 rounded ml-1 h-10 bg-libuGreen flex text-3xl text-libuGreen2"
          onClick={() => {}}
        >
          <IoArrowRedoCircleOutline className="m-auto" />
        </div>
        <div
          className="cursor-pointer hover:bg-libuBlue transition duration-200 w-10 rounded ml-1 h-10 bg-libuGreen flex text-3xl text-libuGreen2"
          onClick={() => {
            signMessage();
          }}
        >
          <RiQrCodeLine className="m-auto" />
        </div>
      </div>
    </div>
  );
};

export default MyCollectionCard;

