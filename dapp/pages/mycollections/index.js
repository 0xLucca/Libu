/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Nav from '../../components/generals/Nav';
import { useAccount } from 'wagmi';
import Footer from '../../components/generals/Footer';
import Title from '../../components/generals/Title';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import MyCollectionCard from '../../components/collections/MyCollectionCard';
import LoadingMembershipCard from '../../components/loading/LoadingMembershipCard';
import QRmodal from '../../components/modal/QRmodal';
import TransferModal from '../../components/modal/TransferModal';

export default function places() {
  const { address, isConnected } = useAccount();

  const [showQR, setshowQR] = useState(false);
  const [showTransfer, setshowTransfer] = useState(false);
  const [QRURL, setQRURL] = useState('');
  const [connected, setConnected] = useState(false);
  const [keysList, setKeysList] = useState([]);
  const [iskeysList, setisKeysList] = useState(true);

  const APIURL =
    'https://api.thegraph.com/subgraphs/name/unlock-protocol/polygon';

  const locksQuery = `
    query {
      keys(
        where: { owner_: {address: "${address}"}}
      ) {
        lock{
          address  
        }
        keyId
        tokenURI
      }
    }
    `;

  useEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);

  useEffect(() => {
    const client = new ApolloClient({
      uri: APIURL,
      cache: new InMemoryCache(),
    });

    client
      .query({
        query: gql(locksQuery),
      })
      .then(({ data }) => {
        setKeysList(data.keys);
        setisKeysList(false);
      })
      .catch((err) => {
        console.log('Error fetching data: ', err);
      });
  }, []);

  const handleQR = (QRURL, showQR) => {
    setQRURL(QRURL);
    setshowQR(showQR);
  };

  const handleshowQR = () => {
    setshowQR(!showQR);
  };

  return (
    <div className="bg-black selection:bg-libuGreen selection:text-libuDarkGreen">
      <Nav />
      <div className="min-h-screen w-8/12 m-auto mt-20 pt-[85px]">
        {showQR && <QRmodal handleshowQR={handleshowQR} QRUrl={QRURL} />}
        {showTransfer && <TransferModal />}
        {connected ? (
          <Title text={'Mi coleccion'} />
        ) : (
          <Title text={'Conecta tu wallet :)'} />
        )}
        <div className="mb-[50px] mt-[30px] flex font-sora font-bold text-[20px] text-black leading-none">
          <div className="rounded-full bg-gradient-to-br from-libuGreen to-libuPink py-[8px] px-[25px] transition duration-150 cursor-pointer hover:bg-libuGreen">
            membresias
          </div>
        </div>

        <div className="flex">
          <div className="w-full h-fit flex gap-5">
            {iskeysList ? (
              <LoadingMembershipCard />
            ) : (
              keysList.map((nft) => (
                <MyCollectionCard
                  nft={nft}
                  key={nft.keyId}
                  handleQR={handleQR}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
