import { AiOutlineCopy, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useSingleVestedTokenInfo } from "../../hooks/useVestedTokens";
import { LineChart } from "../Charts/LineChar";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import { claim } from "../../controllers/blockchain";
import { ethers } from "ethers";

const TravelDetailsView = ({ data }: { data: any }) => {
  const [chartData, setChartData] = useState<ApexOptions>({
    chart: {
      id: "basic-bar",
      background: "none",
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },

    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
      tooltip: {
        enabled: true,
      },
      crosshairs: {
        show: true,
      },
    },
    grid: {
      show: false,
    },
    fill: {
      colors: ["#fff"],
    },
    stroke: {
      width: 1,
      colors: ["white"],
    },
    xaxis: {
      type: "datetime",
      categories: data?.map((d: any) => {
        return d[0];
      }),
    },
    series: [
      {
        name: "series-1",
        data: data?.map((d: any) => {
          return d[1];
        }),
      },
    ],
  });

  return (
    <ReactApexChart type="area" options={chartData} series={chartData.series} />
  );
};

export const TokenDetailDashBoard = () => {
  const { id } = useParams();
  const { tokenInfo, coinInfo, priceData } =
    useSingleVestedTokenInfo("fitmint");
  return (
    <>
      {tokenInfo && coinInfo ? (
        <div className="bg-primaryDark max-w-8xl p-6 py-12 w-full space-y-10 rounded-xl">
          {/* top part */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12  rounded-full ">
              <img
                src={coinInfo?.image?.thumb}
                className={"w-full h-full object-cover"}
                alt="Img"
              />
            </div>
            <p className="text-2xl font-extrabold ">{coinInfo?.name}</p>
          </div>
          <div className="grid grid-cols-3 space-y-10 ">
            {/* donw part */}
            <div className="col-start-1 col-span-3 grid grid-cols-3 gap-5">
              {/* upper part */}
              <div className="col-start-1 col-span-2 px-8 flex justify-between">
                <div>
                  <p className="text-lg text-white/70">tokens left to claim:</p>
                  <p className="text-xl">
                    {ethers.utils.formatUnits(tokenInfo.cliffamount,18)}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-white/60">
                    lock Period: 12 months
                  </p>
                  <p className="text-lg text-white/60">diff period: 30 days</p>
                </div>
              </div>
              <div className="col-start-3 col-span-1">
                <button className="bg-thirdDark w-full text-center p-2 rounded-lg">
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
                <div className="h-[400px]">
                  <TravelDetailsView data={priceData.prices} />
                </div>
              </div>
              <div className="col-start-3 col-span-1 pt-8 space-y-3">
                <div className="bg-thirdDark w-full py-2 rounded-lg flex justify-around items-center">
                  <a target="_blank" className="text-sm">
                    Token Address
                  </a>
                  <AiOutlineCopy className="text-sm -rotate-45" />
                </div>
                <div className="bg-thirdDark w-full py-2 flex rounded-lg justify-around items-center">
                  <a
                    href={coinInfo?.links?.blockchain_site[0]}
                    className="text-sm"
                  >
                    Explorer
                  </a>
                  <AiOutlineLogout className="text-sm -rotate-45" />
                </div>
                <div className="bg-thirdDark w-full py-2 rounded-lg flex justify-around items-center">
                  <a href={coinInfo?.links?.homepage[0]} className="text-sm">
                    Website
                  </a>
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
                    Vesting Contract Adress: {tokenInfo.poolid.slice(0, 20)}...{" "}
                  </p>
                  <AiOutlineLogout className="text-sm -rotate-45" />
                </div>
              </div>
              <div className="col-start-3 col-span-1 ">
                <button className=" w-full text-sm py-2 bg-PrimaryBlue text-center rounded-full" onClick={() =>{claim(tokenInfo.poolid)}}>
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
