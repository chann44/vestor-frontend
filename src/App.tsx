import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "./componets/Layout";
import { ConnectWallet } from "./componets/OnBoarding/Connectwallet";

import { ObBoarding } from "./componets/OnBoarding/";
import { useAccount, useConnect, useSwitchNetwork } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";



function App() {
  const navigate = useNavigate();
  return <ObBoarding />;
}

export default App;
