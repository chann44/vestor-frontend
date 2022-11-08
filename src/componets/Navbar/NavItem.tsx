import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

interface Props {
    Icon: React.ElementType
    title: string
    classes: string
    link: string
}


export const NavItem = ({ Icon, title, classes, link }: Props) => {
    const [active, setActive] = useState<boolean>(false)
    const location = useLocation()


    useEffect(() => {
        if (location.pathname.startsWith(link)) {
            console.log(location.pathname, link)
            setActive(true)
        }
    }, [location, link])
    return (
        <Link to={link}>
            <div className={"flex flex-col justify-center hover:border-r border-purple   space-y-4 group " + (active ? "border-r border-purple" : " ")}>
                <div className="flex items-center space-x-7">
                    <div className={" w-12 h-12 bg-faddedDark flex justify-center items-center rounded-xl group-hover:bg-faddedBlue " + (active ? "bg-faddedBlue " : "")}>
                        <Icon size={18} className={classes + " "} />
                    </div>
                    <div className="">
                        <p className={"text-lg group-hover:text-purple  " + classes + (active ? " text-purple  " : " ")}>{title}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}