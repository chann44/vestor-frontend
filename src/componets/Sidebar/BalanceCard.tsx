import { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useClient } from "wagmi";
import { useAppContext } from "../../context/AppContextProvider";
import { getPortfolioBalance } from "../../controllers";
export const BalanceCard = () => {
  const [balance, setBalance] = useState();
  const { data: cleintData } = useClient();
  const { totalBalance } = useAppContext();
  useEffect(() => {
    (async () => {
      const data = await getPortfolioBalance(
        cleintData?.chain?.id,
        cleintData?.account
      );
      console.log("balala,", data);
    })();
  }, []);
  return (
    <div className="bg-thirdDark mx-4 rounded-lg py-10 space-y-6 ">
      {/* ETh Balance card */}
      <h1 className="text-2xl text-center">TOTAL BALANCE</h1>
      <h1 className="text-PrimaryBlue text-5xl font-bold text-center">
        ${totalBalance}
      </h1>
    </div>
  );
};
