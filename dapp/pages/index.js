import Head from 'next/head';
import Nav from '../components/generals/Nav';
import Hero from '../components/home/Hero';
import QuienesSomos from '../components/home/QuienesSomos';
import QueHacemos from '../components/home/QueHacemos';
import QueBuscamos from '../components/home/QueBuscamos';
import Etapa from '../components/home/Etapa';
import Footer from '../components/generals/Footer';

const Home = () => {
  return (
    <div className="bg-libuBlack">
      <Nav />
      <Hero />
      <div className="w-10/12 m-auto">
        <div className="w-10/12 md:w-8/12">
          <QuienesSomos />
          <QueHacemos />
          <QueBuscamos />
          <Etapa />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

/*

  const { address, isConnected } = useAccount({
    onDisconnect() {
      setReadEnable(false);
      setLocked(true);
    },
    onConnect() {
      setReadEnable(true);
    },
  });

*/
