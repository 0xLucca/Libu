import Link from 'next/link';
import React from 'react';

const Place = ({ nft }) => {
  return (
    <Link
      href={`/nftDesc?address=${nft.address}&name=${nft.name}&expirationDuration=${nft.expirationDuration}&creationBlock=${nft.creationBlock}&tokenAddress=${nft.tokenAddress}&price=${nft.price}`}
    >
      <div className="cursor-pointer border-2 border-red-500 w-fit p-5 m-5">
        <p className="font-bold">{nft.name}</p>
        <p>{nft.address}</p>
        <p>{nft.price}</p>
      </div>
    </Link>
  );
};

export default Place;
