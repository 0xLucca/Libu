/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Nav from '../../components/generals/Nav';
import { useAccount } from 'wagmi';
import Footer from '../../components/generals/Footer';
import Title from '../../components/generals/Title';

export default function places() {
  const { isConnected } = useAccount();
  const APIURL =
    'https://api.thegraph.com/subgraphs/name/unlock-protocol/polygon';

  const locksQuery = `
query {
    keys(where: {owner: }) {
        tokenURI
        owner {
          id
        }
        keyId
        lock {
          id
        }
      }
    }
}
`;
  useEffect(() => {
    if (isConnected) {
      const client = new ApolloClient({
        uri: APIURL,
        cache: new InMemoryCache(),
      });

      client
        .query({
          query: gql(locksQuery),
        })
        .then(({ data }) => {
          console.log('My Memberships: ', data);
          setLocksList(data);
          setisLocksList(false);
        })
        .catch((err) => {
          console.log('Error fetching data: ', err);
        });
    }
  }, [isConnected]);

  return (
    <>
      <div className="bg-libuBlack min-h-screen ">
        <Nav />

        {isConnected ? (
          <Title text={'Mis colecciones'} />
        ) : (
          <Title text={'Conecte su wallet para continuar'} />
        )}

        <Footer />
      </div>
    </>
  );
}
