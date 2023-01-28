import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Vesting } from "./pages/Vesting";
import { TokenDetails } from "./componets/Vesting/TokenDetails";
import { VestingDetails } from "./componets/Vesting/VestingDetail";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import { AppContextProvider } from "./context/AppContextProvider";

// chart setup
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Home } from "./pages/Home";
import { TokenDashboard } from "./pages/TokenDashBoard";
import { TokenListing } from "./componets/TokenDashBoard/Listing";
import { TokenDetailDashBoard } from "./componets/TokenDashBoard/TokenDashBoardDetails";
Chart.register(CategoryScale);

// router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/select",
    element: <Select />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/vesting",
    element: <Vesting />,
    children: [
      {
        path: "",
        element: <TokenDetails />,
      },
      {
        path: "VestingDetails",
        element: <VestingDetails />,
      },
    ],
  },
  {
    path: "/tokendashboard",
    element: <TokenDashboard />,
    children: [
      {
        path: "",
        element: <TokenListing />,
      },
      {
        path: "tokendetails/:id",
        element: <TokenDetailDashBoard />,
      },
    ],
  },
  {
    path: "/investorTransection",
    element: <InvestorTransection />,
  },
]);



import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { Select } from "./componets/OnBoarding/Select";
import { ConnectWallet } from "./componets/OnBoarding/Connectwallet";
import { InvestorTransection } from "./componets/investortransection";
import '@rainbow-me/rainbowkit/styles.css';

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, useSwitchNetwork, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)

// Set up client
const { chains, provider } = configureChains(
  [polygonMumbai],
  [
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



// change max w to a fixed value later

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
        <WagmiConfig client={wagmiClient} >
      <RainbowKitProvider chains={chains} modalSize="compact" coolMode initialChain={polygonMumbai} theme={darkTheme()}  >
      <AppContextProvider>
        <div
         onClick={(e) => {
           e.stopPropagation();
         }}
          
          className="bg-primaryDark text-white"
        >
          
          <div className="bg-primaryDark min-h-screen max-w-full    mx-auto">
            <RouterProvider router={router} />
          </div>
        </div>
      </AppContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
