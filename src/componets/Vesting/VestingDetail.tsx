import { useState } from "react"
import { AiFillDelete } from "react-icons/ai"
import uuid from "react-uuid"


interface another {
    id: number,
    type: string,
    value: string
}
export const VestingDetails = () => {
    const [optoins, setOptions] = useState<any>()
    const [inputArr, setInputArr] = useState<any>([
        [
            {
                id: uuid(),
                type: "text",
                value: ""
            }, {
                id: uuid(),
                type: "text",
                value: ""
            },

        ],
    ])

    const onchangeInput = (val: any, index: any) => {
        const temp = optoins
        temp[index] = val.target.value
        setOptions(temp)
        console.log(temp)
    }


    const addAnotherChoice = () => {
        setInputArr((prev: any) => {
            return [...prev, [
                {
                    id: uuid(),
                    type: "text",
                    value: ""
                }, {
                    id: uuid(),
                    type: "text",
                    value: ""
                },
            ]]
        })
    }


    return (
        <div className="bg-primaryDark w-full  mx-auto rounded-xl p-8 space-y-6 ">
            <h1 className="text-xl">Enter Vesting Details</h1>
            <div className="grid grid-cols-12 gap-4 space-y-10">
                <div className="grid grid-cols col-start-1 gap-2 col-span-12">
                    <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-1 col-span-4 ">
                        <input type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded" placeholder="Enter Tokne Name" />
                    </div>
                    <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-5 col-span-4 ">
                        <input type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded" placeholder="Enter Tokne Name" />
                    </div>
                    <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-9 col-span-4 ">
                        <input type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded" placeholder="Enter Tokne Name" />
                    </div>
                </div>
                <div className="grid grid-cols-12 col-start-1 col-span-12 space-y-10">
                    {
                        inputArr.map((item: any, index: number) => {
                            return <div className="grid grid-cols-13 col-start-1 col-span-12 gap-4 items-center">
                                <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-1 col-span-6 ">
                                    <input type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded" placeholder="Enter Tokne Name" />
                                </div>
                                <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-7 col-span-6 ">
                                    <input type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded" placeholder="Enter Tokne Name" />
                                </div>
                                <div className="col-start-13">
                                    <div className="bg-red w-10 h-10 flex items-center justify-center rounded-full">
                                        <AiFillDelete />
                                    </div>
                                </div>
                            </div>

                        })
                    }
                    <div className="col-start-7 col-span-6  grid grid-cols-6 gap-4">
                        <button className="bg-PrimaryBlue py-2 col-start-1 col-span-3 rounded-lg" onClick={() => {
                            addAnotherChoice()
                        }}>+Add Another</button>
                        <button className="bg-PrimaryBlue py-2 col-start-4 col-span-3 rounded-lg">Approve and Vest</button>
                    </div>
                </div>
            </div>
        </div>

    )
}