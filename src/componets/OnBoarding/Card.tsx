import { sendTransaction } from "@wagmi/core"
import React, { ElementType, FunctionComponent, ReactElement } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppContext } from "../../context/AppContextProvider"



export const Button = () => {
    return <button className="px-5 bg-primaryDark py-1 rounded-full text-center">comming soon</button>
}


interface BProps {
    title: string,
    text: string
    Btn?: React.ElementType
    link?: any 
    redirectLink?: string
}

export const Card = ({title, text, Btn, link, redirectLink}: BProps) => {
    const {setRedirectLink} = useAppContext()
    const naviagate = useNavigate()
    return (
        <Link onClick={() => {
                if(redirectLink) {
                    setRedirectLink(redirectLink)
                } else {
                    console.log("fop")
                }
        }} to={link  } className=" rounded-xl cursor-pointer my-10 flex justify-center r w-[30%] px-8 py-8 bg-thirdDark text-center h-[300px]">
             <div className="w-full flex items-center ">
            <div className="space-y-10">
                <h1 className="text-2xl font-extrabold">{title}</h1>
                <p className="text-sm">{text}</p>
               { Btn && <Btn/> }
            </div>
       </div>
        </Link>
    )
}






