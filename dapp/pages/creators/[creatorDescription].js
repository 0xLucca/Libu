/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BreadcrumbItem from '../../components/breadcrum/BreadcrumbItem';
import Breadcrumb from '../../components/breadcrum/BreadCrumbs';
import Footer from '../../components/generals/Footer';
import Nav from '../../components/generals/Nav';
import Title from '../../components/generals/Title';
import LoadingMembershipCard from '../../components/loading/LoadingMembershipCard';
import MembershipCard from '../../components/memberships/MembershipCard';

const indexCreator = () => {
  const router = useRouter();
  //en creator guardo la address que viene por url 👇
  const [creator, setCreator] = useState(router.query['creator']);
  const [locksList, setLocksList] = useState([]);
  const [islocksList, setisLocksList] = useState(true);

  const [breadcrumbs, setBreadcrumbs] = useState();
  const [breadcrumbsLength, setBreadcrumbsLength] = useState();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0];
    let pathArray = pathWithoutQuery.split('/');
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== '');

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/');
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      };
    });

    setBreadcrumbs(breadcrumbs);
    setBreadcrumbsLength(breadcrumbs.length);
  }, [router.asPath]);

  const APIURL =
    'https://api.thegraph.com/subgraphs/name/unlock-protocol/polygon';

  const locksQuery = `
  query {
    locks(where: {address: "${router.query['creator']}"}) {
      id
      price
      address
      name
      tokenAddress
      expirationDuration
      creationBlock
    }
  }
  `;

  //este es el mismo codigo que habias hecho antes
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
        console.log('Creators Memberships: ', data.locks);
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
        <div className="min-h-screen">
          <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            {breadcrumbs &&
              breadcrumbs.map((breadcrumb, i) => (
                <BreadcrumbItem
                  key={breadcrumb.href}
                  href={breadcrumb.href}
                  last={breadcrumbsLength == i + 1 && true}
                >
                  {breadcrumb.label}
                </BreadcrumbItem>
              ))}
          </Breadcrumb>
          <Title text={creator} />
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
                  <MembershipCard nft={nft} key={nft.tokenAddress} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default indexCreator;
