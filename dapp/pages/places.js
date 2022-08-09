/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import MembershipCard from '../components/MembershipCard';
import LoadingMembershipCard from '../components/loading/LoadingMembershipCard';

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
        console.log('Subgraph data: ', data);
        setLocksList(data.locks);
        console.log('lockList data: ', locksList);
        setisLocksList(false);
      })
      .catch((err) => {
        console.log('Error fetching data: ', err);
      });
  }, []);

  return (
    <>
      <div className="bg-libuBlack">
        <Nav />
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
          xl:grid-cols-5
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
                <MembershipCard nft={nft} key={nft.tokenAddress} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
