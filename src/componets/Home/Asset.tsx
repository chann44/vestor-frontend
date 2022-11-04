import { AiFillProfile, AiOutlineUsb } from "react-icons/ai"

export const AssetHead = () => {
    return (
        <div className="grid grid-cols-5 p-5">
            <div className="col-start-1 col-span-1 grid grid-cols-2 ">
                <div className=" col-start-1 col-span-1 flex justify-center items-center">
                    <p className="text-sm text-text-faded">ASSET</p>
                </div>
            </div>
            <div className="col-start-2 col-span-1    flex justify-center">
                <p className="text-sm text-text-faded">PRICE</p>
            </div>
            <div className="col-start-3 col-span-1 flex justify-center  ">
                <p className="text-sm text-text-faded">BALANCE</p>
            </div>
            <div className="col-start-4 col-span-1  flex justify-center ">
                <p className="text-sm text-text-faded">VALUE</p>
            </div>
            <div className="col-start-5 col-span-1 flex justify-center  ">
                <p className="text-sm text-text-faded">TOKEN ADDRESS</p>
            </div>
        </div>


    )
}


const AssetComponet = () => {
    return (
        <div className="grid grid-cols-5 p-5 bg-secondaryDark items-center rounded-xl">
            <div className="col-start-1 col-span-1 grid grid-cols-2 ">
                <div className="w-full flex items-center space-x-4">
                    <div className="rounded-full">
                        <AiFillProfile size={32} className="rounded-full" />
                    </div>
                    <div>
                        <p>FRONTLINE</p>
                        <p className="text-xs text-text-faded">PRONTLINE.com</p>
                    </div>
                </div>
            </div>
            <div className="col-start-2 col-span-1   text-text-faded flex justify-center">
                <p className="text-sm">12 months</p>
            </div>
            <div className="col-start-3 col-span-1 flex justify-center  ">
                <p className="text-sm">120000</p>
            </div>
            <div className="col-start-4 col-span-1  flex justify-center ">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-sm">14 Apr 2022</p>
                    <p className="text-xs text-text-faded">at 8:30</p>
                </div>
            </div>
            <div className="col-start-5 col-span-1 flex justify-center  ">
                <p className="text-sm text-text-faded">0x923...923</p>
            </div>
        </div>
    )
}


export const Assets = () => {
    return (
        <div className=" bg-primaryDark w-full p-5 rounded-xl">
            <AssetHead />
            <AssetComponet />
        </div>
    )
}