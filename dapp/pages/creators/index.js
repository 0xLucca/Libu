/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import CreatorCard from '../../components/creators/CreatorCard';
import Footer from '../../components/generals/Footer';
import Nav from '../../components/generals/Nav';
import Title from '../../components/generals/Title';
import LoadingCreatorCard from '../../components/loading/LoadingCreatorCard';

const indexCreator = () => {
  const [locksList, setLocksList] = useState([]);
  const [islocksList, setisLocksList] = useState(true);

  const APIURL =
    'https://api.thegraph.com/subgraphs/name/unlock-protocol/polygon';

  const locksQuery = `
  query {
    locks (first: 15) {
        address
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
        <Title text={'Creadores'} />
        <div className="flex">
          <div
            className="
            gap-3
          xl:w-11/12 
          lg:w-10/12 
          md:w-10/12 
          sm:w-10/12 
          w-10/12 
          mx-auto 
          grid
          xl:grid-cols-4
          lg:grid-cols-3
          md:grid-cols-2
          grid-cols-1
          "
          >
            {islocksList === true ? (
              <LoadingCreatorCard />
            ) : (
              locksList.map((nft) => <CreatorCard creator={nft} key={nft} />)
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default indexCreator;
