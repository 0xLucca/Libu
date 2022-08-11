import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Nav from '../components/generals/Nav';
import Footer from '../components/generals/Footer';
import NFTDesc from '../components/NFTDesc';
import BreadCrumbs from '../components/BreadCrumbs';
import Breadcrumb from '../components/BreadCrumbs';
import BreadcrumbItem from '../components/BreadcrumbItem';

const ticketDesc = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
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

  const thisNFT = {
    address: router.query['address'],
    name: router.query['name'],
    expirationDuration: router.query['expirationDuration'],
    creationBlock: router.query['creationBlock'],
    tokenAddress: router.query['tokenAddress'],
    price: router.query['price'],
  };

  return (
    <div className="bg-libuBlack min-h-screen flex flex-col justify-between">
      <Nav />
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

      <NFTDesc nft={thisNFT} />
      <Footer />
    </div>
  );
};

export default ticketDesc;
