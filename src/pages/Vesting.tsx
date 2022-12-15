import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "../componets/Layout";
import { MOdal } from "../componets/Vesting/MOdal";
import { useAppContext } from "../context/AppContextProvider";
import { VestingContextProvider } from "../context/VestingConfext";

export default function Toggle() {
  const { enabled, setEnabled } = useAppContext();
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
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-11 h-6 bg-PrimaryBlue rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-PrimaryBlue after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
          ></div>
          <span className="ml-2 text-sm font-medium text-white">
            {enabled ? "Testing" : "Main"}
          </span>
        </label>
      </div>
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
