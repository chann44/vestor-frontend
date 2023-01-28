import { Outlet } from "react-router-dom";
import { useAccount } from "wagmi";
import { Layout } from "../componets/Layout";
import { MOdal } from "../componets/Vesting/MOdal";
import { useAppContext } from "../context/AppContextProvider";
import { VestingContextProvider } from "../context/VestingConfext";
import { mintfaucettokens } from "../controllers/blockchain";

export default function Toggle() {
  const { enabled, setEnabled } = useAppContext();
  const { address } = useAccount();
  return (
    <div className="relative flex flex-col items-center justify-center  overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
         
          
        </label>
      </div>
      <button onClick={() => {
              mintfaucettokens(1000, address);
            }}className="ml-2 bg-PrimaryBlue rounded p-2 font-medium text-white text-xl">mint test tokens</button>
    </div>
  );
}

export const Vesting = () => {
  const { showModal, setShowModal } = useAppContext();
  return (
    <VestingContextProvider>
      <Layout>
        <div className="space-y-20 px-5 ">
          <div className="flex justify-between">
            <h1 className="py-12 text-2xl text-text font-extrabold">
              Token Vesting
            </h1>
            <Toggle />
          </div>
          <div className="w-full  flex justify-center items-center">
            {showModal && <MOdal />}
            <Outlet />
          </div>
        </div>
      </Layout>
    </VestingContextProvider>
  );
};
