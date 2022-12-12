import { AiOutlineCopy, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useSingleVestedTokenInfo } from "../hooks/useVestedTokens";
import { Layout } from "./Layout";

export const Transection = () => {
  return (
    <div className="grid grid-cols-5 p-5 bg-primaryDark">
      <div className="col-start-1 col-span-2 grid grid-cols-2 ">
        <div className=" col-start-1 col-span-1 flex justify-center items-center">
          <p className="text-sm text-text-faded">0z000..cxs</p>
        </div>
      </div>
      <div className="col-start-3 col-span-1    flex justify-center">
        <p className="text-sm text-center flex flex-col justify-center">
          <span>12 Apr 2020</span>
          <small className="text-xs text-text-faded">at 10:30pm</small>
        </p>
      </div>
      <div className="col-start-4 col-span-1 flex justify-center  ">
        <p className="text-sm ">10000</p>
      </div>
      <div className="col-start-5 col-span-1  flex justify-center ">
        <p className="text-sm ">10000</p>
      </div>
    </div>
  );
};

export const InvestorTransection = () => {
  const { id } = useParams();
  const { tokenInfo, coinInfo, priceData } =
    useSingleVestedTokenInfo("fitmint");
  return (
    <>
      <Layout>
        {tokenInfo && coinInfo ? (
          <div className=" max-w-4xl p-6 py-12 w-full space-y-10 rounded-xl my-32 mx-auto">
            {/* top part */}
            <div className="flex items-center justify-between p-5 rounded-lg space-x-3 bg-primaryDark">
              <div className="flex items-center">
                <div className="w-20 h-20  rounded-full ">
                  <img
                    src={coinInfo?.image?.thumb}
                    className={"w-full h-full object-cover"}
                    alt="Img"
                  />
                </div>
                <p className="text-4xl font-extrabold ">{coinInfo?.name}</p>
              </div>
              <div className="flex space-x-4">
                <div className="bg-secondaryDark w-20 h-20 rounded-sm"></div>
                <div className="bg-secondaryDark w-20 h-20 rounded-sm"></div>
                <div className="bg-secondaryDark w-20 h-20 rounded-sm"></div>
              </div>
            </div>
            <div className="w-full text-center flex justify-between items-center space-x-8">
              <div className=" flex flex-col justify-center space-y-3 w-full">
                <p className="">Total tokens Locked</p>
                <div className="bg-primaryDark p-6 rounded-lg text-center">
                  <p className="text-PrimaryBlue font-bold text-3xl">32,325</p>
                </div>
              </div>
              <div className=" flex flex-col justify-center space-y-3 w-full">
                <p className="">Total tokens Locked</p>
                <div className="bg-primaryDark p-6 rounded-lg text-center">
                  <p className="text-PrimaryBlue font-bold text-3xl">32,325</p>
                </div>
              </div>
              <div className=" flex flex-col justify-center space-y-3 w-full">
                <p className="">Total tokens Locked</p>
                <div className="bg-primaryDark p-6 rounded-lg text-center">
                  <p className="text-PrimaryBlue font-bold text-3xl">32,325</p>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <p>Investor Transections</p>
              <div className="space-y-5">
                <Transection />
                <Transection />
                <Transection />
              </div>
            </div>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </Layout>
    </>
  );
};
