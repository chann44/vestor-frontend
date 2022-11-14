import { useAppContext } from "../../context/AppContextProvider"
import { Card } from "./Card"

export const Select = () => {
    return (
    <div className="flex justify-center space-x-10 min-h-screen items-center">
        <Card title="TOKEN ISSUER" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua

"  link={"/connect"} redirectLink={'/vesting'} />
        <Card title="INVESTOR" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
"  link={"/connect"} redirectLink={"/tokendashboard"}/>
    </div>
    )
}