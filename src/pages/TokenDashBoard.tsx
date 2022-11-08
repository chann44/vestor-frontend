import { Outlet } from "react-router-dom"
import { Layout } from "../componets/Layout"

export const TokenDashboard = () => {
    return (
        <Layout>
            <div className="space-y-20 px-5">
                <h1 className="py-12 text-2xl text-text font-extrabold">Token DashBoard</h1>
                <div className="w-full   flex justify-center items-center">
                    <Outlet />
                </div>
            </div>
        </Layout>
    )
}