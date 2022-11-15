import React, {
    Children,
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";
  import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { TokenDetail } from "../componets/Vesting/TokenDetails";
  import { GetCoinINFO } from "../controllers";
  
  interface Props {
    children: ReactNode;
  }
  
  interface VestContext {
    addAnotherChoice: Function
    DelteINput: Function
    onchangeInput: Function
    vestingPeriod: string
    setVestingPeriod: Dispatch<SetStateAction<string>> 
    clifPeriod: string 
    setCliffPeriod: Dispatch<SetStateAction<string>>
    optoins: any
    setOptions: any 
    inputArr: any
    setInputArr: Dispatch<SetStateAction<any>>
    vestingDate: string 
    setVestingDate: Dispatch<SetStateAction<string>>
    name: string,
    setName: Dispatch<SetStateAction<string>>
    tokenInfo:  TokenDetail | null
    setTokenInfo: Dispatch<SetStateAction<TokenDetail | null>>
  }
  
  const context = createContext({} as VestContext);
  
  export const useVestingContext = () => {
    return useContext(context);
  };
  
  
  
  
  export const VestingContextProvider = ({ children }: Props) => {
    const [optoins, setOptions] = useState<any>([]);
    const [inputArr, setInputArr] = useState<any>([uuid()]);
    const [vestingPeriod, setVestingPeriod] = useState("")
  const [clifPeriod, setCliffPeriod] = useState('')
  const [vestingDate, setVestingDate] = useState("")
  const [name, setName] = useState("");
  const [tokenInfo, setTokenInfo] = useState<TokenDetail | null>(null);
  
    const onchangeInput = (e: any, index: any, name: string) => {
      const temp = optoins;
      temp[index] = { ...optoins[index], [name]: e.target.value };
 setOptions((prev: any) => {
        return [...temp];
      });
    };
  
    const DelteINput = (index: number) => {
      const tempArr: [] = inputArr;
      tempArr.length > 1 && tempArr.splice(index, 1);
      setInputArr((prev: any) => {
        return [...tempArr];
      });
    };
  
    useEffect(() => {
      console.log(optoins);
    }, [optoins]);
  
    const addAnotherChoice = () => {
      setInputArr((prev: any) => {
        return [...prev, uuid()];
      });
    };

    const shared_value = {
        addAnotherChoice,
        DelteINput,
        onchangeInput,
        optoins,
        setOptions,
        inputArr,
        setInputArr,
        vestingPeriod,
        clifPeriod,
        setCliffPeriod,
        setVestingPeriod,
        vestingDate,
        setVestingDate,
        name,
        setName,
        tokenInfo, setTokenInfo
   };
    return (
      <>
        <context.Provider value={shared_value}>{children}</context.Provider>
      </>
    );
  };
  