import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "./componets/Layout";
import { ConnectWallet } from "./componets/OnBoarding/Connectwallet";

import {ObBoarding } from "./componets/OnBoarding/";


function App() {
  const navigate = useNavigate()
  
  return(
    <ObBoarding />
  )
}

export default App;
