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
  const [signature, setSignature] = useState('');
  const [payload, setPayload] = useState('');
  const [account, setAccount] = useState(address);

  const { address, isConnected } = useAccount();
  const { network } = useNetwork();
  //const network = 137;

  //borrable 👇
  useEffect(() => {
    setAccount(address);
  }, [address]);

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

  //1️⃣
  //creo un payload al renderizar la card, asi ya esta listo
  //y no necesita ser ejecutado para ser creado
  useEffect(() => {
    const payload = JSON.stringify({
      network: network,
      account: account,
      lockAddress: nft.lock.address,
      timestamp: Date.now(),
      tokenId: nft.keyId,
    });

    setPayload(payload);
  }, [nft]);

  //borrable 👇
  useEffect(() => {
    console.log('Show QR', showQr);
  }, [showQr]);

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

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    //2️⃣
    //aca en el message, ya esta seleccionado el payload (del useState) creado al momento del rendereo
    message: payload,
    //esta wea no le termino de entender 🥴
    //https://wagmi.sh/docs/hooks/useSendTransaction#onsettled-optional
    onSettled(data, error) {
      console.log(`Data: ${data}`);
      setSignature({
        payload,
        data,
      });
      setShowQr(!showQr);

      /*
      if (isSuccess) {
        setSignature({
          payload,
          data,
        });
        console.log(data);
        setShowQr(!showQr);
      }
      */
    },
  });

  //3️⃣
  //Esta funcion no iria porque el payload ya esta creado desde un principio con el useEffect
  /*
  const handleSignature = () => {
    //setError('')
    let _payload = JSON.stringify({
      network,
      account,
      lockAddress: nft.lock.address,
      timestamp: Date.now(),
      tokenId: nft.keyId,
    });

    setPayload(_payload);

    //const signature = await walletService.signMessage(payload, 'personal_sign')
    signMessage();
  };
  */

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
              //4️⃣
              //No ejecuto la funcion handleSignature (que creaba el payload)
              //ejecuto directamente el singMessage de wagmi
              //onClick={handleSignature}
              onClick={() => {
                signMessage(), handleShowQR(showQr);
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
              size={'90%'}
              value={QRUrl()}
              level={'L'}
              renderAs="svg"
              className="m-auto h-44 md:h-52 rounded z-50"
              bgColor="#FCF7F8"
              fgColor="#363732"
              includeMargin={true}
            />
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
