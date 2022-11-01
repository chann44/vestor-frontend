
interface Props {
    Icon: React.ElementType
    title: string
    classes: string
}


export const NavItem = ({ Icon, title, classes }: Props) => {
    return (
        <div className="flex flex-col justify-center hover:border-r border-purple   space-y-4 group ">
            <div className="flex items-center space-x-7">
                <div className="w-12 h-12 bg-faddedDark flex justify-center items-center rounded-xl group-hover:bg-faddedBlue ">
                    <Icon size={18} className={ classes +  " "} />
                </div>
                <div className="">
                    <p className= {"text-lg group-hover:text-purple  " + classes }>{title}</p>
                </div>
            </div>
        </div>
    )
}