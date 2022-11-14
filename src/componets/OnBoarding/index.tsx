import { Button, Card } from "./Card"

export const ObBoarding = ()=> {
    return (
        <div className="w-full space-x-10  min-h-screen p-5 flex justify-around items-center content-center flex-wrap ">
                <Card title="Vesting" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" link={"/select"} />
                <Card title="Vesting" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" Btn={Button} />
                <Card title="Vesting" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" Btn={Button} />
                <Card title="Vesting" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" Btn={Button} />
                <Card title="Vesting" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" Btn={Button} />
                <Card title="Vesting" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" Btn={Button} />
        </div>
    )

}