import { Assets } from "../componets/Home/Asset"
import { PerformanceCard } from "../componets/Home/Performance"
import { Transections } from "../componets/Home/TransectionHistory"
import { Layout } from "../componets/Layout"

export const Home = () => {
    return (

        <Layout>
            <div>
                <div className="w-full  grid grid-cols-12 p-8 gap-6">
                    {/* performace  */}
                    <div className="col-start-1 col-span-7  rounded-xl space-y-3   ">
                        <h1 className="text-text text-lg font-bold">PERFORMANCE</h1>
                        <PerformanceCard />
                    </div>
                    {/* history */}
                    <div className="w-full col-start-8 col-end-13 rounded-xl space-y-3  ">
                        <h1 className="text-text text-lg font-bold">TRANSECTION HISTORY</h1>
                        <Transections />
                    </div>
                </div>
                {/* assets */}
                <div>
                    <Assets />
                </div>
            </div>
        </Layout >
    )
}