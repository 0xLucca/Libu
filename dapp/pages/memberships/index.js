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
    locks (first: 3) {
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

  return (
    <div className="bg-black selection:bg-libuGreen selection:text-libuDarkGreen">
      <Nav />
      <div className="min-h-screen w-8/12 m-auto mt-20 pt-[85px]">
        <Title text={'explorar'} />
        <div className="w-full h-fit flex gap-5">
          {islocksList === true ? (
            <LoadingMembershipCard />
          ) : (
            locksList.map((nft) => (
              <MembershipCard nft={nft} key={nft.tokenAddress} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

/*
 */
