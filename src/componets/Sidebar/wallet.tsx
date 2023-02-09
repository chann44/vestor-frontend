import { useEffect } from "react";
import { AiOutlineSetting, AiOutlineMoneyCollect } from "react-icons/ai";
import { getwallets } from "../../controllers/blockchain";

const WalletITem = () => {

  useEffect(() => {
    (async () => {
      console.log("wallets")
     console.log(getwallets)
    })();
  }, []);
  return (
    <div className="border-l border-text px-2 flex justify-between items-center space-x-3 hover:border-PrimaryBlue group">
      <div className="bg-[#3A3A3C] group-hover:bg-PrimaryBlue/10 h-10 w-10 rounded-full flex justify-center items-center group-hover:text-PrimaryBlue">
        <AiOutlineMoneyCollect />
      </div>
      <p className="w-[80%] text-text-faded break-words text-sm">
        0xBF5Fa88fBa7Bf7Ec27f6C89e9400b41027dD3a06
      </p>
    </div>
  );
};

export const Wallets = () => {
  return (
    <div className="mx-4 p-4 flex flex-col justify-between rounded-lg bg-thirdDark min-h-[200px] max-h-max space-y-6  overflow-y-scroll">
      <div className="flex flex-col space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <p>wallets</p>
            <div className=" flex justify-center items-center w-4 h-4 rounded-full bg-PrimaryBlue text-center">
              <p className="text-xs">1</p>
            </div>
          </div>
          <div>
            <AiOutlineSetting size={18} className="text-text" />
          </div>
        </div>
        <div className="space-y-2">
          <WalletITem />
          <WalletITem />
          <WalletITem />
          <WalletITem />
        </div>
      </div>
      <div className="w-full">
        <button className="bg-PrimaryBlue ease-out w-full text-center duration-200 text-text py-1 rounded-lg transition transform active:scale-95">
          Add New Wallet
        </button>
      </div>
    </div>
  );
};
