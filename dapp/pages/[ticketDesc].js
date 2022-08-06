import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import NFTDesc from '../components/NFTDesc';
import myData from '../data/data.json';

const ticketDesc = () => {
  const router = useRouter();
  const { ticketDesc } = router.query;

  const nft = myData.find((t) => t.creationBlock === ticketDesc);

  return (
    <div>
      <Nav />
      <p>parametro de ruta: {ticketDesc}</p>
    </div>
  );
};

export default ticketDesc;
