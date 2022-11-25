import { useEffect, useState } from "react";
import { Token, TokenDetail } from "../componets/Vesting/TokenDetails";
import { GetCoinINFO, GetCoinINFOByID } from "../controllers";
import { getdata } from "../controllers/blockchain";

export const useVestedTokesn = () => {
  const [tokens, setTokens] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const res = await getdata();
      setTokens(() => {
        return res;
      });
      console.log(res);
    })();
  }, []);
  return { tokens };
};

export const useSingleVestedTokenInfo = (name: string | undefined) => {
  const [tokenInfo, setTokenInfo] = useState<any>();
  const [coinInfo, setCoinInfo] = useState<any>();
  const [tokenExtraDetail, setTokeExtraDetails] = useState<any>()
  const { tokens } = useVestedTokesn();
  
  const filterToken = (
    tokens: Array<any>,
    name: string
  ): Array<any> => {
    return tokens.filter((token) => {
      if (token.name !== name) {
        return token;
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    console.log("tokens")
    if (tokens && name ) {
        console.log("tokens", tokens)
      const filtred = filterToken(tokens, name);
      setTokenInfo(filtred[0]);
    }
  }, [tokens, name]);


  useEffect(() => {
    (async () => {
        console.log("hi")
      if (name) {
        console.log("i am token info")
        const coins: Token[] = await GetCoinINFO("Fitmint")
        console.log("coins,",  coins)
        if(coins.length > 0) {
        coins.map(async (coin) => {
          if(coin.name == "Fitmint") {
              const coinInfo: TokenDetail = await GetCoinINFOByID(coin.id)
              console.log( "coinifo< ", coinInfo)
              setCoinInfo(coinInfo)
              return
          }
        })
        } else {
        }
     }
    })();
  }, [name]);
  return { tokenInfo, coinInfo };
};
