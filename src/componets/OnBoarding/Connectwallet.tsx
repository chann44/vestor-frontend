import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useAppContext } from "../../context/AppContextProvider";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const ConnectWallet = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { redirectLink } = useAppContext();
  const { isConnected } = useAccount();
  const naviagate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      naviagate(redirectLink);
    }
  }, [isConnected]);

  return (
    <div className="min-h-screen w-full space-y-7 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-extrabold">Connect wallet</h1>
      
      <div className="w-full p-32 max-w-md min-w-[500px] mx-auto flex flex-col bg-secondaryDark space-y-10">
        
      <ConnectButton  />
      
        

        {error && <div>{error.message}</div>}
      </div>
    </div>
  );
};
