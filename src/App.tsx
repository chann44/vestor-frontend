import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "./componets/Layout";
import { Home } from "./pages/Home";
import { Vesting } from "./pages/Vesting";


function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/home")
  }, [])
  return <><p>Loading...</p></>
}

export default App;
