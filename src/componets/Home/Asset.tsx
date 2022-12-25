import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { AiFillProfile, AiOutlineUsb } from "react-icons/ai";
import { useAccount, useClient } from "wagmi";
import { useAppContext } from "../../context/AppContextProvider";
import { getTokens } from "../../controllers";
import { AssetScal } from "../sckelton/assetScale";

interface IAssetInfo {
  balance: string;
  contract_address: string;
  contract_decimals: 18;
  contract_name: string;
  last_transferred_at: any;
  logo_url: string;
  quote: number;
  quote_rate: number;
}

export const AssetHead = () => {
  return (
    <div className="grid grid-cols-5 p-5">
      <div className="col-start-1 col-span-1 grid grid-cols-2 ">
        <div className=" col-start-1 col-span-1 flex justify-center items-center">
          <p className="text-sm text-text-faded">ASSET</p>
        </div>
      </div>
      <div className="col-start-2 col-span-1    flex justify-center">
        <p className="text-sm text-text-faded">PRICE</p>
      </div>
      <div className="col-start-3 col-span-1 flex justify-center  ">
        <p className="text-sm text-text-faded">BALANCE</p>
      </div>
      <div className="col-start-4 col-span-1  flex justify-center ">
        <p className="text-sm text-text-faded">VALUE</p>
      </div>
      <div className="col-start-5 col-span-1 flex justify-center  ">
        <p className="text-sm text-text-faded">TOKEN ADDRESS</p>
      </div>
    </div>
  );
};

const AssetComponet = ({
  balance,
  contract_name,
  quote,
  contract_address,
  logo_url,
  quote_rate,
}: IAssetInfo) => {
  return (
    <div className="grid grid-cols-5 p-3 bg-secondaryDark items-center rounded-lg my-2">
      <div className="col-start-1 col-span-1 grid grid-cols-2  ">
        <div className="w-full flex items-center justify-between col-span-2 ">
          <div className="rounded-full w-8 h-8">
            <img src={logo_url} className="rounded-full object-cover" />
          </div>
          <div className="grow  border-green">
            <p className="w-full">{contract_name}</p>
          </div>
        </div>
      </div>
      <div className="col-start-2 col-span-1   text-text-faded flex justify-center">
        <p className="text-sm">{quote_rate ? quote_rate : 0}</p>
      </div>
      <div className="col-start-3 col-span-1 flex justify-center  ">
        <p className="text-sm">
          {ethers.utils.formatEther(balance).toString().slice(0, 8)}
        </p>
      </div>
      <div className="col-start-4 col-span-1  flex justify-center ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">{quote}</p>
        </div>
      </div>
      <div className="col-start-5 col-span-1 flex justify-center  ">
        <p className="text-sm text-text-faded">
          {contract_address?.slice(0, 5)}
        </p>
      </div>
    </div>
  );
};

export const Assets = () => {
  const [token, setTokens] = useState<IAssetInfo[] | null>(null);
  const { data: cleintData } = useClient();
  const { setTotalBalance } = useAppContext();
  useEffect(() => {
    (async () => {
      if (cleintData) {
        const data =
          cleintData?.chain?.id &&
          cleintData?.account &&
          (await getTokens(cleintData?.chain?.id, cleintData?.account));
        let price: number = 0;
        const res = data.data.items.map((item: any) => {
          console.log(
            "blance of token",
            item.quote,
            ethers.utils.formatUnits(item.balance, 18)
          );
          price = price + item?.quote;
        });
        console.log("blalaldlfjowjfowejof", price);
        setTotalBalance(price);
        setTokens((prev: any) => {
          return [...data?.data?.items];
        });
      }
    })();
  }, [cleintData]);

  return (
    <div className=" bg-primaryDark w-full p-5 rounded-xl">
      <AssetHead />
      {token ? (
        token?.map((asset: IAssetInfo) => {
          return (
            <AssetComponet
              quote_rate={asset.quote_rate}
              balance={asset.balance}
              contract_address={asset.contract_address}
              contract_decimals={asset.contract_decimals}
              contract_name={asset.contract_name}
              logo_url={asset.logo_url}
              last_transferred_at={asset.last_transferred_at}
              quote={asset.quote}
              key={asset.contract_address}
            />
          );
        })
      ) : (
        <>
          <AssetScal />
          <AssetScal />
          <AssetScal />
          <AssetScal />
        </>
      )}
    </div>
  );
};
