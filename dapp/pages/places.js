import React from 'react';
import Place from '../components/Place';
import myData from '../data/data.json';
import Nav from '../components/Nav';

const places = () => {
  return (
    <div>
      <Nav />
      {myData.map((nft) => (
        <Place nft={nft} key={nft.id} />
      ))}
    </div>
  );
};

export default places;
