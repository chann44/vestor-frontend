import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useClient } from "wagmi";
import { getWalletTranscations } from "../../controllers";

interface TxProps {
  time: string;
  to_address: string;
  from_address: string;
  ammount: string;
  txaddress:string

}

const Transection = ({ ammount, time,txaddress }: TxProps) => {
  return (
    <><div className="flex justify-between  items-center border-b border-b-[#A0A0A033]/20  py-3 ">
      <div className="flex space-x-3 ">
        <div
          className={" w-10 h-10 bg-faddedBlue flex justify-center items-center rounded-xl group-hover:bg-faddedBlue "}
        >
          <BsArrowRight size={16} className="text-purple -rotate-45" />
        </div>
        <div>
        <a href={"https://mumbai.polygonscan.com/tx/" + txaddress}>
      transcation
    </a>
        <p className="text-xs text-text-faded">
          {new Date(time).toDateString().toString()}
        </p>
      </div>
    </div><p>{ammount}ETH</p>
    </div>
    </>
  );
};
const TransectionScalton = () => {
  return (
    <div className="flex justify-between rounded-xl  items-center  border-b-[#A0A0A033]/20  p-3 bg-secondaryDark ">
      <div className="flex space-x-3 ">
        <div
          className={
            " animate-pulse w-10 h-10 bg-primaryDark flex justify-center items-center rounded-xl group-hover:bg-faddedBlue "
          }
        ></div>
        <div className="w-40 p-3 animate-pulse bg-primaryDark rounded-lg ">
          <p className="text-xs text-text-faded"></p>
        </div>
      </div>
    </div>
  );
};

export const Transections = () => {
  const { data: cleintData } = useClient();
  const [txs, setTxs] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getWalletTranscations(
        cleintData?.chain?.id,
        cleintData?.account
      );
      console.log(data.data.items);
      setTxs(data.data.items);
    })();
  }, []);

  // Example address request
  return (
    <div className="no-scrollbar min-h-[400px] bg-primaryDark max-h-[400px] overflow-y-scroll py-6 px-3">
      {txs.length > 0 ? (
        txs?.map((item: any) => {
          return (
            <Transection
              key={item}
              ammount={ethers.utils.formatEther(item?.value)}
              from_address={item.from_address}
              to_address={item?.to_address}
              time={item?.block_signed_at}
              txaddress ={item?.tx_hash}
             
            />
          );
        })
      ) : (
        <>
          <div className="space-y-3">
            <TransectionScalton />
            <TransectionScalton />
            <TransectionScalton />
            <TransectionScalton />
          </div>
        </>
      )}
    </div>
  );
};
