export const TokenDetails = () => {
    return (
        <div className="bg-primaryDark min-w-[700px]  mx-auto rounded-xl p-8 space-y-6 ">
            <h1 className="text-xl">Enter Token Details</h1>
            <div className="space-y-6">
                <form action="" className="space-y-8">
                    <div className="bg-secondaryDark w-full p-3 rounded-lg ">
                        <input type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded" placeholder="Enter Tokne Name" />
                    </div>
                    <div className="bg-secondaryDark w-full p-3  rounded-lg">
                        <input type="text" className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded" placeholder="Enter Tokne Contract Address" />
                    </div>
                    <div className="bg-secondaryDark w-full p-3 rounded-lg">
                        <textarea rows={5} className="w-full bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-text-faded" placeholder="Enter Tokne Description" />
                    </div>
                </form>
                <div className="w-full flex justify-end">
                    <button>NEXT</button>
                </div>
            </div>
        </div>
    )
}