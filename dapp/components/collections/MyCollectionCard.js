/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useSignMessage } from 'wagmi';

const MyCollectionCard = ({ nft, handleQR }) => {
  const [collectible, setCollectible] = useState({});
  const [showOptions, setShowOptions] = useState(false);
  const [signature, setSignature] = useState('');
  const [account, setAccount] = useState('');
  const [url, seturl] = useState('');
  //const [payload, setPayload] = useState('');
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
    url != '' && handleQR(url, true);
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

      payload = _payload

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
                signMessage();
              }}
              className="mx-2 my-1 text-libuGreen font-sora text-sm text-start"
            >
              QR
            </button>
          </div>
        )}
        <div className="h-44 md:h-52 bg-libuWhite3 mx-1 mt-1 rounded relative">
          <Image
            layout="fill"
            //src="data:image/gif;base64,R0…AAAALAAAAAABAAEAAAIBRAA7"
            src={collectible.image}
            decoding="async"
            data-nimg="fill"
          />
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
