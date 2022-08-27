/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Nav from '../../components/generals/Nav';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import MembershipCard from '../../components/memberships/MembershipCard';
import LoadingMembershipCard from '../../components/loading/LoadingMembershipCard';
import Footer from '../../components/generals/Footer';
import Title from '../../components/generals/Title';

export default function places() {
  const [locksList, setLocksList] = useState([]);
  const [islocksList, setisLocksList] = useState(true);

  const APIURL =
    'https://api.thegraph.com/subgraphs/name/unlock-protocol/polygon';

  const locksQuery = `
  query {
    locks (first: 15) {
        address
        name
        tokenAddress
        price
        maxNumberOfKeys
    		keys(first:1){
          tokenURI
        }
    }
  }
`;
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
        setLocksList(data.locks);
        console.log('lockList data: ', locksList);
        setisLocksList(false);
      })
      .catch((err) => {
        console.log('Error fetching data: ', err);
      });
  }, []);

  const showTheQRModal = (showQr) => {
    console.log('se deveria mostrar que es: ', showQr);
  };

  return (
    <>
      <div className="bg-libuBlack">
        <Nav />
        <Title text={'Memberships'} />
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
            {islocksList === true ? (
              <LoadingMembershipCard />
            ) : (
              locksList.map((nft) => (
                <MembershipCard
                  nft={nft}
                  key={nft.tokenAddress}
                />
              ))
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
