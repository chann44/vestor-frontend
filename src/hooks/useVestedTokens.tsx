import { useEffect, useState } from "react";
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

export const useSingleVestedTokenInfo = (tokenAddress: string | undefined) => {
  const [tokenInfo, setTokenInfo] = useState<any>();
  const { tokens } = useVestedTokesn();

  const filterToken = (
    tokens: Array<any>,
    tokenAddress: string
  ): Array<any> => {
    return tokens.filter((token) => {
      if (token.tokenaddress === tokenAddress) {
        return token;
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    console.log("tokens")
    if (tokens && tokenAddress ) {
        console.log("tokens", tokens)
      const filtred = filterToken(tokens, tokenAddress);
      setTokenInfo(filtred[0]);
    }
  }, [tokens, tokenAddress]);
  return { tokenInfo };
};
