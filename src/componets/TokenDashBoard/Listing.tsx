import { AiFillProfile, AiOutlineUsb } from "react-icons/ai"
import { Link } from "react-router-dom"

export const AssetHead = () => {
    return (
        <div className="grid grid-cols-6 p-5">
            <div className="col-start-1 col-span-1 grid grid-cols-2 ">
                <div className=" col-start-1 col-span-1 flex justify-center items-center">
                    <p className="text-sm text-text-faded">TOKEN</p>
                </div>
            </div>
            <div className="col-start-2 col-span-1    flex justify-center">
                <p className="text-xs text-text-faded">VESTING</p>
            </div>
            <div className="col-start-3 col-span-1 flex justify-center  ">
                <p className="text-xs text-text-faded">AMOUNT</p>
            </div>
            <div className="col-start-4 col-span-1  flex justify-center ">
                <p className="text-xs text-text-faded">UNLOCK Date</p>
            </div>
            <div className="col-start-5 col-span-1 flex justify-center  ">
                <p className="text-xs text-text-faded">TOKEN ADDRESS</p>
            </div>
            <div className="col-start-6 col-span-1 flex justify-center  ">
                <p className="text-xs text-text-faded">Action</p>
            </div>
        </div>


    )
}


const AssetComponet = () => {
    return (
        <div className="grid grid-cols-6 p-5 bg-primaryDark items-center rounded-xl">
            <div className="col-start-1 col-span-1 grid grid-cols-2 ">
                <div className="w-full flex items-center space-x-4">
                    <div className="rounded-full">
                        <AiFillProfile size={32} className="rounded-full" />
                    </div>
                    <div>
                        <p className="text-xs">FRONTLINE</p>
                        <p className="text-[10px] text-text-faded">PRONTLINE.com</p>
                    </div>
                </div>
            </div>
            <div className="col-start-2 col-span-1   text-text-faded flex justify-center">
                <p className="text-xs">12 months</p>
            </div>
            <div className="col-start-3 col-span-1 flex justify-center  ">
                <p className="text-xs">120000</p>
            </div>
            <div className="col-start-4 col-span-1  flex justify-center ">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-xs">14 Apr 2022</p>
                    <p className="text-[10px] text-text-faded">at 8:30</p>
                </div>
            </div>
            <div className="col-start-5 col-span-1 flex justify-center  ">
                <p className="text-xs text-text-faded">0x923...923</p>
            </div>
            <div className="col-start-6 col-span-1 flex justify-center  ">
                <Link to={"tokendetails"}>
                    <button className="text-xs bg-PrimaryBlue px-4 py-1 rounded-xl">View</button>
                </Link>
            </div>
        </div>
    )
}


export const TokenListing = () => {
    return (
        <div className="  w-full p-5 rounded-xl">
            <AssetHead />
            <AssetComponet />
        </div>
    )
}

