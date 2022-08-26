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

      {connected ? (
        <Title text={'Crear coleccion'} />
      ) : (
        <Title text={'Conecta tu wallet :)'} />
      )}
      <div className="w-10/12 md:w-11/12 m-auto mb-10">
        <div className="md:w-6/12">
          {connected && <ContactUs address={address} />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default indexCreateEvent;
