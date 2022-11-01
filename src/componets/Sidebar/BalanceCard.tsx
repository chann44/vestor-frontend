import {AiOutlineLogout} from "react-icons/ai"
export const BalanceCard = () => {
    return (
        <div className="bg-thirdDark mx-4 rounded-lg p-4 space-y-3">
                {/* ETh Balance card */}
                <p className="text-xl text-text font-bold">ETH</p>
                <h1 className="text-PrimaryBlue text-2xl font-bold">$32</h1>
                <div className="flex space-x-2 text-sm items-center">
                    <AiOutlineLogout className="-rotate-45 text-green" />
                    <p className="text-green">+15.12%</p>
                    <p> | <span className="text-text/70">Last 30 days</span></p>
                </div>
                <div className="pb-5">
                    <button className="bg-PrimaryBlue px-12 text-center text-text py-1 rounded-lg">withdraw</button>
                </div>
            </div> 
    )
}
    