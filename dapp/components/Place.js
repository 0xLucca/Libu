import Link from 'next/link';
import React from 'react';

const Place = ({ nft }) => {
  return (
    <Link href={`/${nft.creationBlock}`}>
      <div className="border-2 border-red-500 w-fit p-5 m-5">
        <p className="font-bold">{nft.name}</p>
        <p>{nft.address}</p>
        <p>{nft.price}</p>
      </div>
    </Link>
  );
};

export default Place;
