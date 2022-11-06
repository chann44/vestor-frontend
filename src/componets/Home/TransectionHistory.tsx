import { BsArrowRight } from "react-icons/bs"

const Transection = () => {
    return (
        <div className="flex justify-between  items-center border-b border-b-[#A0A0A033]/20  py-3 ">
            <div className="flex space-x-3 ">
                <div className={" w-10 h-10 bg-faddedBlue flex justify-center items-center rounded-xl group-hover:bg-faddedBlue "}>
                    <BsArrowRight size={16} className="text-purple -rotate-45" />
                </div>
                <div>
                    <p>Transfred</p>
                    <p className="text-xs text-text-faded">12 Aug 2022 | 10: 00</p>
                </div>
            </div>
            <p>0.01ETH</p>
        </div>
    )
}



export const Transections = () => {

// Example address request
    return (
        <div className="min-h-[400px] bg-primaryDark max-h-[400px] overflow-y-scroll py-6 px-3">
            <Transection />
            <Transection />
            <Transection />
            <Transection />
        </div>
    )
}