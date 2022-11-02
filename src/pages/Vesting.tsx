import { Layout } from "../componets/Layout"
import { MOdal } from "../componets/Vesting/MOdal"
import { TokenDetails } from "../componets/Vesting/TokenDetails"
import { VestingDetails } from "../componets/Vesting/VestingDetail"

export const Vesting = () => {
    return (
        <Layout>
            <div className="space-y-20 px-5">
                <h1 className="py-12 text-2xl text-text font-extrabold">Token Vesting</h1>
                <div className="w-full  flex justify-center items-center">
                    {/* <MOdal /> */}
                    {/* <TokenDetails /> */}
                    <VestingDetails />

                </div>

            </div>
        </Layout>
    )
}