const APIKEY = 'ckey_ea089e0f2e154e018f7b9e686ac';
const baseURL = 'https://api.covalenthq.com/v1'


export const getWalletTranscations = async (blockchainChainId,Address) => {
    const url = new URL(`${baseURL}/${blockchainChainId}/address/${Address}/transactions_v2/?key=${APIKEY}`);
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;
    console.log(data)
    return data;
}

export const getPortfolioBalance = async (blockchainChainId,Address) => {
    const url = new URL(`${baseURL}/${blockchainChainId}/address/${Address}/portfolio_v2/?key=${APIKEY}`);
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;
    console.log(data)
    return data;
}

export const getTokens = async (blockchainChainId,Address) => {
    const url = new URL(`${baseURL}/${blockchainChainId}/address/${Address}/balances_v2/?key=${APIKEY}`);
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;
    console.log(data)
    return data;
}





