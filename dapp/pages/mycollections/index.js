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

export default function places() {
  const { address, isConnected } = useAccount();

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
        console.log(data.keys);
        setKeysList(data.keys);
        setisKeysList(false);
      })
      .catch((err) => {
        console.log('Error fetching data: ', err);
      });
  }, []);

  console.log(connected);

  return (
    <div className="bg-libuBlack min-h-screen ">
      <Nav />

      {connected ? (
        <Title text={'Mis coleccionables'} />
      ) : (
        <Title text={'Conecta tu wallet :)'} />
      )}

      <div className="flex">
        <div
          className="
          xl:w-11/12 
          lg:w-10/12 
          md:w-10/12 
          sm:w-10/12 
          w-10/12 
          mx-auto 
          grid
          xl:grid-cols-6
          lg:grid-cols-4
          md:grid-cols-3
          sm:grid-cols-3
          grid-cols-2
          "
        >
          {iskeysList ? (
            <LoadingMembershipCard />
          ) : (
            keysList.map((nft) => <MyCollectionCard nft={nft} key={nft} />)
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
