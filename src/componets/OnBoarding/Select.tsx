import { useAppContext } from "../../context/AppContextProvider"
import { Card } from "./Card"

export const Select = () => {
    return (
    <div className="flex justify-center space-x-10 min-h-screen items-center">
        <Card title="TOKEN ISSUER" text="lock your tokens and make your linear and dynamic vesting shedules for your investors for your token

"  link={"/connect"} redirectLink={'/vesting'} />
        <Card title="INVESTOR" text="Check your vested tokens health data and claim your vested tokens in a hassle free manner.
"  link={"/connect"} redirectLink={"/tokendashboard"}/>
    </div>
    )
}