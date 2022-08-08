import Nav from '../components/Nav';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const Home = () => {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: 'Libu',
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: '#260259',
          accentColorForeground: '#51FDED',
          borderRadius: 'none',
          fontStack: 'rounded',
          overlayBlur: 'none',
        })}
      >
        <Nav />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Home;
