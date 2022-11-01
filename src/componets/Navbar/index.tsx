import {AiOutlineHome, AiOutlineAccountBook, AiOutlineShoppingCart,  AiOutlineHistory, AiOutlineLogout, AiOutlineSecurityScan } from "react-icons/ai"
import { NavItem } from "./NavItem"

interface NAVITEM {
    icon: React.ElementType
    title: string
}

const NAVITEMS : NAVITEM[] =[
{
    icon: AiOutlineHome,
    title: "Home"
}, {
    icon: AiOutlineShoppingCart,
    title: "Stores"
}, {
    icon: AiOutlineSecurityScan,
    title: "insurance"
},
 {
    icon:AiOutlineAccountBook ,
    title: "investements"
},
 {
    icon: AiOutlineHistory,
    title: "insurance"
}
] 

export const Navbar = () => {
    return (
        <nav className="w-full h-screen flex flex-col justify-between">
                <div className="py-32">
                    <div className="flex flex-col justify-center  space-y-8 ">
                        {
                            NAVITEMS.map((navItem: NAVITEM) => {
                            return <NavItem classes="text-text" Icon={navItem.icon} title={navItem.title}/>
                            })
                        }
                    </div>
                </div>
                <div className="py-12">
                    <NavItem classes="text-red" Icon={AiOutlineLogout} title="logout" />
                </div>
        </nav>
    )
}