import React from 'react';

const NFTDesc = ({ nft }) => {
  return (
    <div className="border-2 border-red-400 p-5 m-5">
      <p>address: {nft.address}</p>
      <p>name: {nft.name}</p>
      <p>expirationDuration: {nft.expirationDuration}</p>
      <p>creationBlock: {nft.creationBlock}</p>
      <p>tokenAddress: {nft.name}</p>
      <p>price: {nft.price}</p>
      <div className="border-2 border-green-400 p-5 mx-5 mt-5">
        <button className="bg-green-200 w-full p-2 font-black">COMPRAR</button>
      </div>
    </div>
  );
};

export default NFTDesc;
