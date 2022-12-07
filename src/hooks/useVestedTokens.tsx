import { useEffect, useState } from "react";
import { Token, TokenDetail } from "../componets/Vesting/TokenDetails";
import {
  GetCoinINFO,
  GetCoinINFOByID,
  getCoinPriceChart,
} from "../controllers";
import { getdata } from "../controllers/blockchain";

export const useVestedTokesn = () => {
  const [tokens, setTokens] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const res = await getdata();
      console.log("Id hai kya bhai", res);
      setTokens(() => {
        return res;
      });
      console.log(res);
    })();
  }, []);
  return { tokens };
};

export const useSingleVestedTokenInfo = (id: string | undefined) => {
  const [tokenInfo, setTokenInfo] = useState<any>();
  const [coinInfo, setCoinInfo] = useState<any>();
  const { tokens } = useVestedTokesn();
  const [priceData, setPriceData] = useState<any>();

  const filterToken = (tokens: Array<any>, name: string): Array<any> => {
    return tokens.filter((token) => {
      if (token.name !== name) {
        return token;
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    if (tokens && id) {
      const filtred = filterToken(tokens, id);
      setTokenInfo(filtred[0]);
    }
  }, [tokens, name]);

  useEffect(() => {
    (async () => {
      console.log("hi");
      if (id) {
        const coinInfoPromise = GetCoinINFOByID(id);
        const chartDataPromise = getCoinPriceChart(id);

        const coinInfo = await coinInfoPromise;
        const chartData = await chartDataPromise;
        setCoinInfo(coinInfo as TokenDetail);
        setPriceData(chartData);
        return;
      } else {
        console.log("you dont provided the thing ");
      }
    })();
  }, [name]);
  return { tokenInfo, coinInfo, priceData };
};
