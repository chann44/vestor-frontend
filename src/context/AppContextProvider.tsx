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

interface Props {
  children: ReactNode;
}

interface IContext {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>
  redirectLink: string;
  setRedirectLink: Dispatch<SetStateAction<string>>;
}

const context = createContext({} as IContext);

export const useAppContext = () => {
  return useContext(context);
};

export const AppContextProvider = ({ children }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [redirectLink, setRedirectLink] = useState<string>("");

  const shared_value = {
    showModal,
    setShowModal,
    redirectLink,
    setRedirectLink,
  };
  return (
    <>
      <context.Provider value={shared_value}>{children}</context.Provider>
    </>
  );
};
