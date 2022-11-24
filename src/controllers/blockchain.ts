import vestor from "../abi/vestor.json";
import vestorfac from "../abi/vestorfac.json";
import { BigNumber, ethers } from "ethers";
import { erc20ABI } from "wagmi";

const sum =  (
  _numbers: number[],
  _vestingperiod: number,
  cliffperiod: number
) => {
  let sum = 0;

  for (let i = 0; i < _numbers.length; i++) {
    sum += _numbers[i];
  }
  const totalamount = (sum * _vestingperiod) / cliffperiod;
  console.log(sum);
  console.log(sum * (_vestingperiod / cliffperiod));
  return totalamount;
};

export const approve = async (
  tokenAddress: string | any,
  vesting: number,
  cliff: number,
  inputarr: any,
  setisaproved: Function
) => {
  let approvalamount: any = [];
  console.log(tokenAddress, vesting, cliff, inputarr);
  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const contract_address = "0x7EDbf8a624E9224ADC5a438739B0Ed525E503734";
  const signer = provider.getSigner();

  const erc20approval = new ethers.Contract("0x32aA774e671aaf4926f312bCB9498A34b9f50768", erc20ABI, signer);
  const decimals = 18;

  for (let index = 0; index < inputarr.length; index++) {
    let item = {
      approvalamount: parseInt(inputarr[index].ammount),
    };
    approvalamount.push(item.approvalamount);
  }

  const added: number = Number(
    (await sum(approvalamount, vesting, cliff)).toString()
  );
  var percent = (0.01 / 100) * added;
  const addwithfees = (
    (await sum(approvalamount, vesting, cliff)) + percent
  ).toString();
  console.log(ethers.utils.parseUnits(added.toString(), decimals));

  const approval = await erc20approval.approve(
    contract_address,
    ethers.utils.parseUnits(addwithfees, decimals)
  );
  const receipt = provider.waitForTransaction(approval.hash, 1, 150000);
  alert("approval success");
  setisaproved(true);
};

export const vest = async (
  tokenname: string,
  token: any,
  vesting: number,
  cliff: number,
  startime: string,
  inputList: any
) => {
  let investors = [];
  let investorsamount = [];

  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const contract_address = "0x7EDbf8a624E9224ADC5a438739B0Ed525E503734";
  const signer = provider.getSigner();
  let decimals = 18;
  const marketplaceContract = new ethers.Contract(
    contract_address,
    vestorfac,
    signer
  );

  for (let index = 0; index < inputList.length; index++) {
    let item = {
      investor: inputList[index].addrs.toString(),
      investoramount: inputList[index].ammount.toString(),
    };
    investors.push(item.investor);
    investorsamount.push(
      ethers.utils.parseUnits(item.investoramount, decimals)
    );
  }


  console.log(investorsamount)
  console.log(marketplaceContract)

  const res = marketplaceContract._clone(
    "0x2b2C71909164BaE81de0f95A51134E2dfaB07908",
    "FuckYou",
    "0x32aA774e671aaf4926f312bCB9498A34b9f50768",
    investors,
    vesting,
    [BigNumber.from('1')],
    0,
    cliff
  );
  alert("transcation submited");
};

export const datetounix = async (datestr: string) => {
  console.log(datestr)
  const date = new Date(datestr);
  const unixTimestamp = Math.floor(date.getTime() / 1000);
  console.log(unixTimestamp);
};

export const monthstoseconds = (months: number) => {
  const convert = months * 2629800;
  console.log(convert);
};

export const getdata = async () => {
  let peopleArray = [];
  const contract_address = "0x7EDbf8a624E9224ADC5a438739B0Ed525E503734";
  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const accounts = await provider.listAccounts();
  const add = "0xb4e912C0ED3B356af88Ee2587250875d4676Ca02" 

  const signer = provider.getSigner();
  const marketplaceContract = new ethers.Contract(
    contract_address,
    vestorfac,
    signer
  );

  const data = await marketplaceContract.fetchinvaddress(add);
  for (let index = 1; index < data.length; index++) {
    const faactory = new ethers.Contract(data[index], vestor, signer);
    const getnumber = await faactory.getamount(add, 0);
    console.log(getnumber);
    let item = {
      poolid: data[index],
      amount: getnumber.totalamount,
      tokenaddress: getnumber.tokenaddress,
      name: getnumber.name,
      time: getnumber.time,
      cliffamount: getnumber.amount,
    };
    peopleArray.push(item);
  }
  return peopleArray;
};
