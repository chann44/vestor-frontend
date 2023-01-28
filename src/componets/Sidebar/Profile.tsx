import { ConnectButton } from "@rainbow-me/rainbowkit"
import { AiOutlineDown } from "react-icons/ai"
import { useAccount } from "wagmi"
import { configureChains } from 'wagmi'
import { mainnet, optimism } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { useNetwork, useSwitchNetwork } from 'wagmi'

 

export const ProfileCard = () => {
    const { chain } = useNetwork()
      const { address, connector, isConnected } = useAccount()
      const network = useSwitchNetwork({
        chainId: 80001,
      })
    return <div className="flex flex-col w-full justify-center items-center space-y-8">
        {/* profile card */}
      
        
            
      
            <ConnectButton  />
        
        
    </div>
}