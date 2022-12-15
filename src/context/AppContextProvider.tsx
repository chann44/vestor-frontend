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
import { GetCoinINFO } from "../controllers";

interface Props {
  children: ReactNode;
}

interface IContext {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  redirectLink: string;
  setRedirectLink: Dispatch<SetStateAction<string>>;
  totalBalance: number;
  setTotalBalance: Dispatch<SetStateAction<number>>;
}

const context = createContext({} as IContext);

export const useAppContext = () => {
  return useContext(context);
};

export const AppContextProvider = ({ children }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [redirectLink, setRedirectLink] = useState<string>("");
  const [totalBalance, setTotalBalance] = useState<number>(0);

  useEffect(() => {
    try {
      GetCoinINFO("0.5X Long Algorand");
    } catch (e) {
      console.log("we are fucked");
    }
  }, []);

  const shared_value = {
    showModal,
    setShowModal,
    redirectLink,
    setRedirectLink,
    totalBalance,
    setTotalBalance,
  };
  return (
    <>
      <context.Provider value={shared_value}>{children}</context.Provider>
    </>
  );
};
