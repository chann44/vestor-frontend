import { HiLightBulb } from "react-icons/hi"

import { FaGasPump } from "react-icons/fa"
import { useAppContext } from "../../context/AppContextProvider"

const MOdalpoints: string[] = [
    "Approve the Transction for 15000  Of Fitmint Tokens.",
    "Confirm The Transcation to Vest The Tokens.",
    "Transcation Done :)"
]


const ModalITem = () => {
    return (
        <>
            <div className="w-full pt-12">
                <div className=" space-y-3">
                    {
                        MOdalpoints.map((point: string, index: number) => {
                            return <div className="flex space-x-4 items-center text-text-faded">
                                <div className="w-5 h-5 rounded-full">
                                    <HiLightBulb className="text-PrimaryBlue" />
                                </div>
                                <p className="text-sm">{point}</p>
                            </div>
                        })
                    }
                </div>
                <div className="flex space-x-4  items-center mt-12 ">
                    <button className="bg-PrimaryBlue rounded-lg text-text text-lg py-2 px-6 font-extrabold w-full">Approve</button>
                    <button className="bg-PrimaryBlue rounded-lg text-text text-lg py-2 px-6 w-full font-extrabold flex items-center justify-center space-x-3">Send <span className="space-x-3"><FaGasPump className="text-text ml-6" /></span></button>
                </div>
            </div>
        </>
    )
}

export const MOdal = () => {
    const { showModal, setShowModal } = useAppContext()
    return (
        <div onClick={(e) => {
            e.stopPropagation()
            setShowModal(false)
        }} className="">
            <div

                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#383838] bg-opacity-90 rounded-xl"
            >
                <div className="relative  my-6 mx-auto max-w-[400px]">
                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        className="border-0  shadow-lg relative flex flex-col w-full bg-secondaryDark min-w-[300px] min-h-[300px] rounded-xl outline-none focus:outline-none">
                        <div className="relative p-6 flex-auto">
                            <ModalITem />
                        </div>
                        <div className="flex items-center justify-end p-6 rounded-b">
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}


