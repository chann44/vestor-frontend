const APIKEY = "ckey_ea089e0f2e154e018f7b9e686ac";
const baseURL = "https://api.covalenthq.com/v1";

import axios from "axios";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

export const getWalletTranscations = async (
  ChainId: number | undefined,
  Address: string | any
) => {
  const res = await instance.get(
    `/${ChainId}/address/${Address}/transactions_v2/?key=${APIKEY}`
  );
  return res.data;
};

export const getPortfolioBalance = async (
  chainID: number | any,
  Address: string | any
) => {
  const res = await instance.get(
    `/${chainID}/address/${Address}/portfolio_v2/?key=${APIKEY}`
  );
  console.log("useThis url here", res.config.url);
  console.log("historyPortfolio", res.data);
  return res.data;
};

export const getTokens = async (chainID: number, Address: string) => {
  const res = await instance.get(
    `/${chainID}/address/${Address}/balances_v2/?key=${APIKEY}`
  );
  return res.data;
};

const coingeckourl = "https://api.coingecko.com/api/v3/";

export const GetCoinINFO = async (id: string) => {
  let res = await coingeckoinstance.get(
    `https://api.coingecko.com/api/v3/search?query=${id}`
  );
  console.log(res.data);
  return res.data.coins;
};
export const GetCoinINFOByID = async (id: string) => {
  let res = await coingeckoinstance.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );
  console.log(res.data);
  return res.data;
};

const coingeckoinstance = axios.create({
  baseURL: coingeckourl,
});

export const getCoinPriceChart = async (id: string) => {
  const res = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`
  );
  return res.data;
};
