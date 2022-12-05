import { BalanceCard } from "./BalanceCard";
import { ProfileCard } from "./Profile";
import { Wallets } from "./wallet";

export const Sidebar = () => {
  return (
    <div className=" w-full h-screen py-8 px-10 flex flex-col space-y-10 ">
      <ProfileCard />
      <BalanceCard />
      <Wallets />
    </div>
  );
};
