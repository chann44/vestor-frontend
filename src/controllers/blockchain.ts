import vestor from "../abi/vestor.json";
import vestorfac from "../abi/vestorfac.json";
import { BigNumber, ethers } from "ethers";
import { erc20ABI } from "wagmi";
import erc20 from "../abi/erc.json"

const sum = (
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

  const erc20approval = new ethers.Contract(
    tokenAddress,
    erc20ABI,
    signer
  );
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
  const receipt = await provider.waitForTransaction(approval.hash, 1, 150000);
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

  console.log(investorsamount);
  console.log(marketplaceContract);

  const res = marketplaceContract._clone(
    "0xaeBb3FEF6DC045Dd142260DF768bD427400a261E",
    tokenname,
    token,
    investors,
    vesting,
    investorsamount,
    0,
    cliff
  );
  const receipt = await provider.waitForTransaction(res.hash, 1, 150000);
  alert("transcation submitted")
};

export const datetounix = async (datestr: string) => {
  console.log(datestr);
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
  const add = accounts[0];

  const signer = provider.getSigner();
  const marketplaceContract = new ethers.Contract(
    contract_address,
    vestorfac,
    signer
  );

  const data = await marketplaceContract.fetchinvaddress(add);
  console.log(data)
  for (let index = 0; index < data.length; index++) {
    const faactory = new ethers.Contract(data[index], vestor, signer);
    console.log(faactory)
    const getnumber = await faactory.getamount(add,0);
    console.log("this is the number",getnumber);
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

export const claim = async (_address : any) =>{
  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const accounts = await provider.listAccounts();
  const add = accounts[0];

  const signer = provider.getSigner();
  const marketplaceContract = new ethers.Contract(_address, vestor, signer)
  const data = await marketplaceContract.claimtokens(0,add)
  const receipt = await provider.waitForTransaction(data.hash, 1, 150000);
  window.alert("transcation submited")

    
}

export const gettokenissuerdata = async () => {
  let peopleArray = [];
  const contract_address = "0x7EDbf8a624E9224ADC5a438739B0Ed525E503734";
  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const accounts = await provider.listAccounts();
  const add = accounts[0];

  const signer = provider.getSigner();
  const marketplaceContract = new ethers.Contract(
    contract_address,
    vestorfac,
    signer
  );

  const data = await marketplaceContract.fetchaddress(add);
  for (let index = 0; index < data.length; index++) {
    const faactory = new ethers.Contract(data[index], vestor, signer);
    const getnumber = await faactory.getContract(0);
    const investors = await faactory.getnumber._investors[index]
    console.log(getnumber);
    let item = {
      poolid: data[index],
      amount: getnumber._TotalAmount,
      tokenaddress: getnumber._tokencontractaddress,
      vesting: getnumber._vestingPeriod,
    };
    peopleArray.push(item);
  }
  return peopleArray;
};


export const getinvestor = async () => {

  let investor= []
  const contract_address = "0x7EDbf8a624E9224ADC5a438739B0Ed525E503734";
  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const accounts = await provider.listAccounts();
  const add = accounts[0];

  const signer = provider.getSigner();
  const marketplaceContract = new ethers.Contract(
    contract_address,
    vestorfac,
    signer
  );

  const data = await marketplaceContract.fetchaddress(add);
  for (let index = 0; index < data.length; index++) {
    const faactory = new ethers.Contract(data[index], vestor, signer);
    const getnumber = await faactory.getContract(0);
    const investors = await faactory.getnumber._investors[index]
    console.log(getnumber);
    investor.push(investors);
  }
  return investor;
};


export const getapprovaldata = async (amount: number,tokenAddress: string | any ) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const contract_address = "0x7EDbf8a624E9224ADC5a438739B0Ed525E503734";
  const signer = provider.getSigner();
  const accounts = await provider.listAccounts();
  const add = accounts[0];

  const erc20approvalcheck = new ethers.Contract(
    tokenAddress,
    erc20ABI,
    signer
  );
  const approval = erc20approvalcheck.allowance(add,contract_address)
  console.log(approval)
  if(approval >= amount){
    return true
  }
  else{
    return false
  }
};



export const mintfaucettokens = async (amount: number,tokenAddress: string | any ) => {

  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const contract_address = "0xA6bE28977d3Ab88c21942D597a20b8Fa939339F2";
  const signer = provider.getSigner();
  let decimals = 18;
  const accounts = await provider.listAccounts();
  const add = accounts[0];
  const marketplaceContract = new ethers.Contract(
    contract_address,
    erc20,
    signer
  );

  const res = marketplaceContract.mint(
    add,
    ethers.utils.parseUnits("1000", decimals)
  );
  console.log(res)
  alert("transcation submited");

};

export const getwallets = async()=>{
  const wallets: any[] = []
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  provider.listAccounts().then((accounts: any[]) => {


    for (let index = 0; index < accounts.length; index++) {
      wallets.push(accounts[1])
    }
    console.log(wallets)
});
return wallets;
}