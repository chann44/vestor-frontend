import { useEffect, useState } from "react";
import { AiOutlineBlock, AiOutlineCheck, AiOutlineRight } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContextProvider";
import { useVestingContext } from "../../context/VestingConfext";
import { GetCoinINFO, GetCoinINFOByID } from "../../controllers";

export interface Token {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: null;
  thumb: string;
  large: string;
}

export interface TokenDetail {
  contract_address: string;
  description: any;
}

const Addresses = [
  {
    id: 1,
    name: "erc 20",
    addr: "0xA6bE28977d3Ab88c21942D597a20b8Fa939339F2",
  },
  {
    id: 1,
    name: "erc 0",
    addr: "0xA6bE28977d32",
  },
];

export const TokenDetails = () => {
  const { name, setTokenInfo, tokenInfo, setName } = useVestingContext();
  const [exist, setExist] = useState(false);
  const { enabled } = useAppContext();

  useEffect(() => {
    (async () => {
      if (name) {
        const coins: Token[] = await GetCoinINFO(name);
        if (coins.length > 0) {
          coins.map(async (coin) => {
            if (coin.name == name) {
              const coinInfo: TokenDetail = await GetCoinINFOByID(coin.id);
              setTokenInfo(coinInfo);
              setExist(true);
              return;
            }
          });
        } else {
          setExist(false);
        }
      }
    })();
  }, [name]);

  useEffect(() => {
    if (enabled) {
      setTokenInfo(() => Addresses[0] as any);
    }
  }, []);

  return (
    <div className="bg-primaryDark w-full xl:min-w-[700px]  mx-auto rounded-xl p-8 space-y-6 ">
      <h1 className="text-xl">Enter Token Details</h1>
      <div className="space-y-6">
        <form action="" className="space-y-8">
          <div className="bg-secondaryDark flex items-center w-full p-3 rounded-lg ">
             
              <>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded"
                  placeholder="Enter Token Name as Listed On Coingecko(Case-Sensitve)"
                />
                {name ? (
                  exist ? (
                    <AiOutlineCheck className="text-green" />
                  ) : (
                    <AiOutlineBlock className="text-red" />
                  )
                ) : null}
              </>

          </div>
          <div className="bg-secondaryDark w-full p-3  rounded-lg">
            <input
              onChange={(e) => {
                setTokenInfo((prev: any) => {
                  return {
                    ...prev,
                    description: " fake descriotp ",
                    contract_address: e.target.value,
                  };
                });
              }}
              type="text"
              value={tokenInfo?.contract_address}
              className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded"
              placeholder="Enter Token Contract Address"
            />
          </div>
          <div className="bg-secondaryDark w-full p-3 rounded-lg">
            <textarea
              rows={5}
              value={tokenInfo?.description.en}
              className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded"
              placeholder="Enter Token Description"
            />
          </div>
        </form>
        <div className="w-full flex justify-end">
          <Link to={"/vesting/VestingDetails"}>
            <button className="text-xl font-bold">NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
