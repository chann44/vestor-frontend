import { Layout } from "../componets/Layout"
import { MOdal } from "../componets/Vesting/MOdal"
import { TokenDetails } from "../componets/Vesting/TokenDetails"

export const Vesting = () => {
    return (
        <Layout>
            <div className="space-y-20">
                <h1 className="p-12 text-2xl text-text font-extrabold">Token Vesting</h1>
                <div className="w-full  flex justify-center items-center">
                    {/* <MOdal /> */}
                    <TokenDetails />

                </div>

            </div>
        </Layout>
    )
}