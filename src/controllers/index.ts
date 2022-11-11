const APIKEY = 'ckey_ea089e0f2e154e018f7b9e686ac';
const baseURL = 'https://api.covalenthq.com/v1'

import axios from "axios"

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});


export const getWalletTranscations = async (ChainId:number, Address: string) => {
    const res = await instance.get(`/${ChainId}/address/${Address}/transactions_v2/?key=${APIKEY}`)
    return res.data
}

export const getPortfolioBalance = async (chainID: number, Address: string) => {
    const res = await instance.get(`/${chainID}/address/${Address}/portfolio_v2/?key=${APIKEY}`)
    return res.data
}

export const getTokens = async (chainID: number, Address: string) => {
    const res = await instance.get(`/${chainID}/address/${Address}/balances_v2/?key=${APIKEY}`)
    return res.data;
}








