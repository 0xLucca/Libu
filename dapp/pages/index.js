import Head from 'next/head';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <>
      <Nav />
    </>
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
