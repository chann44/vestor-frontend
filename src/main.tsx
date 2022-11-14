import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Vesting } from "./pages/Vesting"
import { TokenDetails } from "./componets/Vesting/TokenDetails"
import { VestingDetails } from "./componets/Vesting/VestingDetail"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
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
    element: <App />
  },
    {
    path: "/select",
    element: <Select/>
  },
    {
    path: "/connect",
    element: <ConnectWallet/>
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
        element: <TokenDetails />
      }, {
        path: "VestingDetails",
        element: <VestingDetails />
      }
    ]
  },
  {
    path: "/tokendashboard",
    element: <TokenDashboard />,
    children: [
      {
        path: "",
        element: <TokenListing />
      }, {
        path: "tokendetails",
        element: <TokenDetailDashBoard />
      }
    ]
  }
]);


import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { Select } from "./componets/OnBoarding/Select";
import { ConnectWallet } from "./componets/OnBoarding/Connectwallet";
 
// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: 'yourAlchemyApiKey' }),
  publicProvider(),
])
 
// Set up client
const client = createClient({
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})

// change max w to a fixed value later 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
    <AppContextProvider >
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="bg-primaryDark text-white">
        <div className="bg-primaryDark min-h-screen max-w-6xl lg:max-w-[80%]  mx-auto">
          <RouterProvider router={router} />
        </div>
      </div>
    </AppContextProvider>
    </WagmiConfig>
  </React.StrictMode>
);
