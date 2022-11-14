import { AiOutlineDown } from "react-icons/ai"
import { useAccount } from "wagmi"
export const ProfileCard = () => {
      const { address, connector, isConnected } = useAccount()
    return <div className="flex flex-col w-full justify-center items-center space-y-8">
        {/* profile card */}
        <div className="flex space-x-4 items-center">
            <div className="w-10 h-10 rounded-full ">
                <img className="rounded-full object-cover" src="https://raw.githubusercontent.com/chann44/g-avtars/f09ed5f1eecb45c28a82b0d79c0a55f2d8ff2479/avtardb/0.svg" alt="" />
            </div>
            <p className="text-xl font-extrabold">{address?.slice(0, 7)}... {address?.slice(address.length - 4, 1)}</p>
        </div>
        {
      !isConnected &&   <div className="bg-thirdDark px-8 py-2 text-text rounded-xl">
            <div className="flex items-center space-x-3">
                <button className="text-lg">Connect Wallet</button>
                <AiOutlineDown size={16} />
            </div>
        </div>
        }
    </div>
}