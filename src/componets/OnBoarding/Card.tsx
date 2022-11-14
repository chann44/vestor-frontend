import React, { ElementType, FunctionComponent, ReactElement } from "react"
import { Link } from "react-router-dom"



export const Button = () => {
    return <button className="px-5 bg-primaryDark py-1 rounded-full text-center">comming soon</button>
}


interface BProps {
    title: string,
    text: string
    Btn?: React.ElementType
    link?: any 
}

export const Card = ({title, text, Btn, link}: BProps) => {
    return (
        <Link to={link } className=" rounded-xl cursor-pointer my-10 flex justify-center r w-[30%] px-8 py-8 bg-thirdDark text-center h-[300px]">
             <div className="w-full ">
            <div className="space-y-10">
                <h1 className="text-2xl font-extrabold">{title}</h1>
                <p className="text-sm">{text}</p>
               { Btn && <Btn/> }
            </div>
       </div>
        </Link>
    )
}






