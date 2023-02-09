import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import uuid from "react-uuid";
import { useAppContext } from "../../context/AppContextProvider";
import { useVestingContext } from "../../context/VestingConfext";

interface another {
  id: number;
  type: string;
  value: string;
}
export const VestingDetails = () => {
  const {
    optoins,
    setOptions,
    inputArr,
    tokenInfo,
    name,
    setInputArr,
    vestingDate,
    setVestingDate,
    vestingPeriod,
    setVestingPeriod,
    onchangeInput,
    DelteINput,
    addAnotherChoice,
    clifPeriod,
    setCliffPeriod,
  } = useVestingContext();
  const { setShowModal } = useAppContext();
  return (
    <div className="bg-primaryDark w-full  mx-auto rounded-xl p-8 space-y-6 ">
      <h1 className="text-xl">Enter Vesting Details</h1>
      <div className="grid grid-cols-12 gap-4 space-y-10">
        <div className="grid grid-cols col-start-1 gap-2 col-span-12">
          <div className="rounded-lg col-start-1 col-span-4 ">
            <label htmlFor="" className="text-sm text-text-faded">
              start date
            </label>
            <div className=" bg-secondaryDark w-full p-3 ">
              <input
                type="date"
                value={vestingDate}
                onChange={(e) => {
                  setVestingDate(e.target.value);
                }}
                className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded placeholder:text-sm text-sm"
                placeholder="Enter The Vesting Period in Months"
              />
            </div>
            
          </div>
          <div className="rounded-lg col-start-5 col-span-4 ">
            <label htmlFor="" className="text-text-faded text-sm">
              Vesting period
            </label>
            <div className=" bg-secondaryDark w-full p-3 ">
              <input
                type="text"
                value={vestingPeriod}
                onChange={(e) => {
                  setVestingPeriod(e.target.value);
                }}
                className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded placeholder:text-sm text-sm"
                placeholder="Enter The Vesting Period in Months"
              />
            </div>
            
          </div>
          <div className="rounded-lg col-start-9 col-span-4 ">
            <label htmlFor="vestdate" className="text-text-faded text-sm">
             Cliff Period
            </label>
            <div className=" bg-secondaryDark w-full p-3 ">
              <input
                type="text"
                value={clifPeriod}
                onChange={(e) => {
                  setCliffPeriod(e.target.value);
                }}
                className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded placeholder:text-sm text-sm"
                placeholder="Enter The cliff Period in Months"
              />
            </div>
            
            
          </div>
        </div>
        <div className="grid grid-cols-12 col-start-1 col-span-12 space-y-10">
          {inputArr.map((item: any, index: number) => {
            return (
              
              <div className="grid grid-cols-13 col-start-1 col-span-12 gap-4 items-center">
                <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-1 col-span-6 ">
                  <input
                    onChange={(e) => {
                      onchangeInput(e, index, "addrs");
                    }}
                    type="text"
                    className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded placeholder:text-sm text-sm"
                    placeholder="Enter The Investor Address "
                  />
                </div>
                
                <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-7 col-span-6 ">
                
                  <input
                    onChange={(e) => {
                      onchangeInput(e, index, "ammount");
                    }}
                    type="text"
                    className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded placeholder:text-sm text-sm"
                    placeholder="Enter The total Investor Amount  "
                  />
                </div>
                <div className="col-start-13">
                  <div
                    className="bg-red active:scale-95 transition transform duration-200 ease-out w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={() => {
                      DelteINput(index);
                    }}
                  >
                    <AiFillDelete />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="col-start-1 col-span-12 xl:col-start-7 xl:col-span-6 grid grid-cols-6 gap-4">
            <button
              className=" active:scale-95 transition transform duration-200 ease-out bg-PrimaryBlue py-2 col-start-1 col-span-3 rounded-lg"
              onClick={() => {
                addAnotherChoice();
              }}
            >
              +Add Another
            </button>
            <button
              className="active:scale-95 transition transform duration-200 ease-out bg-PrimaryBlue py-2 col-start-4 col-span-3 rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(true);
              }}
            >
              Approve and Vest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
