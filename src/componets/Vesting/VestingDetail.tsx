import { useState, useEffect } from "react"
import { AiFillDelete } from "react-icons/ai"
import uuid from "react-uuid"


interface another {
    id: number,
    type: string,
    value: string
}
export const VestingDetails = () => {
    const [optoins, setOptions] = useState<any>([])
    const [inputArr, setInputArr] = useState<any>([
        uuid(),
    ])

    const onchangeInput = (e: any, index: any, name: string) => {
        const temp = optoins
        temp[index] = { ...optoins[index], [name]: e.target.value }
        setOptions(temp)
        console.log(temp)
    }

    const DelteINput = (index: number) => {
        const tempArr: [] = inputArr
        console.log(tempArr)
        tempArr.length > 1 && tempArr.splice(index, 1)
        setInputArr((prev: any) => {
            return [...tempArr]
        })

    }


    useEffect(() => {
        console.log(optoins)
    }, [optoins])


    const addAnotherChoice = () => {
        setInputArr((prev: any) => {
            return [...prev, uuid()]
        })
    }


    return (
        <div className="bg-primaryDark w-full  mx-auto rounded-xl p-8 space-y-6 ">
            <h1 className="text-xl">Enter Vesting Details</h1>
            <div className="grid grid-cols-12 gap-4 space-y-10">
                <div className="grid grid-cols col-start-1 gap-2 col-span-12">
                    <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-1 col-span-4 ">
                        <input type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded placeholder:text-sm text-sm" placeholder="Enter The Vesting Period in Months" />
                    </div>
                    <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-5 col-span-4 ">
                        <input type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded placeholder:text-sm text-sm" placeholder="Enter The Cliff Period In Months" />
                    </div>
                    <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-9 col-span-4 ">
                        <input type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded placeholder:text-sm text-sm" placeholder="Enter The Start Date for The Vesting" />
                    </div>
                </div>
                <div className="grid grid-cols-12 col-start-1 col-span-12 space-y-10">
                    {
                        inputArr.map((item: any, index: number) => {
                            return <div className="grid grid-cols-13 col-start-1 col-span-12 gap-4 items-center">
                                <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-1 col-span-6 ">
                                    <input onChange={(e) => {
                                        onchangeInput(e, index, "addrs")
                                    }} type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded placeholder:text-sm text-sm" placeholder="Enter The Investor Address " />
                                </div>
                                <div className="bg-secondaryDark w-full p-3 rounded-lg col-start-7 col-span-6 ">
                                    <input
                                        onChange={(e) => {
                                            onchangeInput(e, index, "ammount")
                                        }}
                                        type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded placeholder:text-sm text-sm" placeholder="Enter The Investor Amount Per Cliff Period" />
                                </div>
                                <div className="col-start-13">
                                    <div className="bg-red w-10 h-10 flex items-center justify-center rounded-full cursor-pointer" onClick={() => {
                                        DelteINput(index)
                                    }} >
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