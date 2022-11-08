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
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>
}


const context = createContext({} as IContext);

export const useAppContext = () => {
    return useContext(context);
};

export const AppContextProvider = ({ children }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false)


    const shared_value = {
        showModal, setShowModal
    }
    return <>
        <context.Provider value={shared_value}>
            {children}
        </context.Provider>

    </>
}