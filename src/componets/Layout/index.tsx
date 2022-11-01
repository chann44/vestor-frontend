import { ReactNode } from "react"
import { Navbar } from "../Navbar"
import { Sidebar } from "../Sidebar"


interface Props {
    children: ReactNode
}

export const Layout = ({children}: Props) => {
    return (
        <div className="w-full grid grid-cols-12">
                <div className="min-h-screen col-start-1 col-span-2 ">
                        <Navbar />
                </div>
                <div className="min-h-screen col-start-3 col-span-7 bg-secondaryDark ">
                    {children}
                </div>
                <div className="min-h-screen col-start-10 col-span-3 " >
                   <Sidebar /> 
                </div>
        </div>
    )
}