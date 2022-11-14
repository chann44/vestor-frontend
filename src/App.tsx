import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "./componets/Layout";
import { Home } from "./pages/Home";
import { Vesting } from "./pages/Vesting";

import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider} from "react-query";

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  useQuery,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ObBoarding } from "./componets/OnBoarding";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: "LnkP2wQM1s7bEsucCYrX5l-0LhCk5-Bo" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const queryClient = new QueryClient();


function App() {
  const navigate = useNavigate()
  return(
    <QueryClientProvider client={queryClient}>
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <ObBoarding />
    </RainbowKitProvider>
    </WagmiConfig>
 </QueryClientProvider> )
}

export default App;
