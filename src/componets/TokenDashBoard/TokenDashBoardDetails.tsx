import { useEffect } from "react";
import { AiOutlineCopy, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getdata } from "../../controllers/blockchain";
import { useSingleVestedTokenInfo } from "../../hooks/useVestedTokens";
import { LineChart } from "../Charts/LineChar";

export const TokenDetailDashBoard = () => {
  const { tokenAddress } = useParams();
  const { tokenInfo, coinInfo } = useSingleVestedTokenInfo("0xa4b6e76bba7413b9b4bd83f4e3aa63cc181d869f");

  return (
    <>
      {tokenInfo && coinInfo ? (
        <div className="bg-primaryDark max-w-3xl p-6 py-12 w-full space-y-10 rounded-xl">
          {/* top part */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full ">
              <img src={coinInfo?.image?.thumb} alt="Img" />
            </div>
            <p className="text-2xl font-extrabold">{tokenInfo?.name}</p>
          </div>
          <div className="grid grid-cols-3 space-y-10 ">
            {/* donw part */}
            <div className="col-start-1 col-span-3 grid grid-cols-3 gap-5">
              {/* upper part */}
              <div className="col-start-1 col-span-2 px-8 flex justify-between">
                <div>
                  <p className="text-xs">tokens left to claim:</p>
                  <p className="text-sm">{parseInt(tokenInfo.cliffamount._hex)}</p>
                </div>
                <div>
                  <p className="text-xs">lock Period: 12 months</p>
                  <p className="text-xs">diff period: 30 days</p>
                </div>
              </div>
              <div className="col-start-3 col-span-1">
                <button className="bg-thirdDark w-full text-center py-1 rounded-lg">
                  Add to wallet
                </button>
              </div>
            </div>
            <div className="col-start-1 col-span-3 grid grid-cols-3 gap-5">
              {/* upper part */}
              <div className="rounded-xl col-start-1 col-span-2 p-8 bg-thirdDark flex flex-col">
                <div className="w-full flex justify-end">
                  <p>
                    <span className="text-[10px]  text-green">+15.8%</span> |{" "}
                    <span className="text-[10px] text-text-faded">
                      last 30 days
                    </span>
                  </p>
                </div>
                <div>
                  <LineChart />
                </div>
              </div>
              <div className="col-start-3 col-span-1 pt-8 space-y-3">
                <div className="bg-thirdDark w-full py-2 rounded-lg flex justify-around items-center">
                  <a  target="_blank" className="text-sm">Token Address</a>
                  <AiOutlineCopy className="text-sm -rotate-45" />
                </div>
                <div className="bg-thirdDark w-full py-2 flex rounded-lg justify-around items-center">
                  <a  href={coinInfo?.links?.blockchain_site[0]} className="text-sm">Explorer</a>
                  <AiOutlineLogout className="text-sm -rotate-45" />
                </div>
                <div className="bg-thirdDark w-full py-2 rounded-lg flex justify-around items-center">
                  <a href={coinInfo?.links?.homepage[0]} className="text-sm">Website</a>
                  <AiOutlineLogout className="text-sm -rotate-45" />
                </div>
                <div className="bg-thirdDark w-full py-2 rounded-lg flex justify-around items-center">
                  <p className="text-sm">Exchange</p>
                  <AiOutlineLogout className="text-sm -rotate-45" />
                </div>
              </div>
            </div>
            <div className="col-start-1 col-span-3 grid grid-cols-3 gap-5">
              <div className="col-start-1 col-span-2">
                <div className="rounded-lg flex w-full bg-thirdDark items-center justify-between px-6 py-2">
                  <p className="text-sm">
                    Vesting Contract Adress: {tokenInfo.poolid.slice(0,20)}...{" "}
                  </p>
                  <AiOutlineLogout className="text-sm -rotate-45" />
                </div>
              </div>
              <div className="col-start-3 col-span-1 ">
                <button className=" w-full text-sm py-2 bg-PrimaryBlue text-center rounded-full">
                  CLAIM
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};
