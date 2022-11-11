import vestor from "../abi/vestor.json"
import vestorfac from '../abi/vestorfac.json';
import { ethers } from 'ethers'; 
import { erc20ABI } from "wagmi";

const sum = async (_numbers,_vestingperiod ,cliffperiod) => {
    let sum = 0;

  for (let i = 0; i < _numbers.length; i++) {
  sum += _numbers[i];
    }
    const totalamount = sum*_vestingperiod/cliffperiod 
    console.log(sum)
    console.log(sum*(_vestingperiod/cliffperiod) )
    return totalamount
    
}


export const approve = async ( tokenAddress,vesting,cliff,inputList) => {
  let approvalamount = []
  
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract_address = "0x7EDbf8a624E9224ADC5a438739B0Ed525E503734";
  const signer = provider.getSigner();

  const erc20approval = new ethers.Contract(tokenAddress, erc20ABI, signer )
  const decimals = 18

  for (let index = 0; index < inputList.length; index++) {
    let item = {
      approvalamount:parseInt(inputList[index].LastName)
    }
    approvalamount.push(item.approvalamount)
  }

  const added = (await sum(approvalamount,vesting,cliff)).toString()
  var percent = (0.01 / 100) * added ;
  const addwithfees = (await sum(approvalamount,vesting,cliff) + percent).toString()
  console.log(ethers.utils.parseUnits(added, decimals))

  const approval = await erc20approval.approve(contract_address,ethers.utils.parseUnits(addwithfees, decimals))
  const receipt = provider.waitForTransaction(approval.hash, 1, 150000)
  alert("approval success")

}


export const vest = async (tokenname,token,vesting,cliff,startime,inputList) => {
  let investors =[]
  let investorsamount = []

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract_address = "0x7EDbf8a624E9224ADC5a438739B0Ed525E503734";
  const signer = provider.getSigner();

  const marketplaceContract = new ethers.Contract(contract_address, vestorfac, signer )

  for (let index = 0; index < inputList.length; index++) {
    let item = {
      investor:inputList[index].firstName.toString(),
      investoramount:inputList[index].LastName.toString(),
    }
    investors.push(item.investor)
    investorsamount.push(ethers.utils.parseUnits(item.investoramount, decimals)) 
  }

  const res =  marketplaceContract._clone("0x2b2C71909164BaE81de0f95A51134E2dfaB07908",tokenname,token,investors,vesting,investorsamount,startime,cliff)
  alert("transcation submited");


}

export const datetounix = async (datestr) => {
  const date = new Date(datestr);
  console.log(date); // 👉️ Wed Jun 22 2022
  
  const timestampInMs = date.getTime();
  
  const unixTimestamp = Math.floor(date.getTime() / 1000);
  console.log(unixTimestamp);
  
  }



  export const monthstoseconds =  (months) => {
     const convert = months * 2629800
      console.log(convert)
    
  }

  export const getdata = async () =>{
    let peopleArray =[]
   
    
    const contract_address = "0x7EDbf8a624E9224ADC5a438739B0Ed525E503734";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    const add = accounts[0];
  
    
  
    const signer = provider.getSigner();
    const marketplaceContract = new ethers.Contract(contract_address, vestorfac, signer)
  
    const data = await marketplaceContract.fetchinvaddress(add)
    console.log(data)
      for (let index = 0; index < data.length; index++) {
        const faactory = new ethers.Contract(data[index], vestor, signer)
  
        const getnumber = await faactory.getamount(add,0)
        console.log(getnumber)
        let item = {
          poolid:data[index],
          amount:getnumber.totalamount,
          tokenaddress:getnumber.tokenaddress,
          name:getnumber.name,
          time:getnumber.time,
          cliffamount:getnumber.amount
  
        }
        
        peopleArray.push(item)
      }
  
      return peopleArray
  }