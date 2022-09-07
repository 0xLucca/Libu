/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Nav from '../../components/generals/Nav';
import Footer from '../../components/generals/Footer';
import Title from '../../components/generals/Title';
import { useAccount } from 'wagmi';
import { ContactUs } from '../../components/generals/ContactUs';

const indexCreateEvent = () => {
  const { isConnected, address } = useAccount();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);

  return (
    <div className="bg-libuBlack min-h-screen">
      <Nav />
      <div className="min-h-screen">
        <Title text={'Crear coleccion'} />
        <div className="w-9/12 mx-auto mb-10">
          <div className="">{connected && <ContactUs address={address} />}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default indexCreateEvent;
