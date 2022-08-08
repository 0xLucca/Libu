import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import NFTDesc from '../components/NFTDesc';

const ticketDesc = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const thisNFT = {
    address: router.query['address'],
    name: router.query['name'],
    expirationDuration: router.query['expirationDuration'],
    creationBlock: router.query['creationBlock'],
    tokenAddress: router.query['tokenAddress'],
    price: router.query['price'],
  };

  return (
    <div>
      <Nav />
      <NFTDesc nft={thisNFT} />
    </div>
  );
};

export default ticketDesc;
