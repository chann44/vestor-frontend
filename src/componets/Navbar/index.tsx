import {
  AiOutlineHome,
  AiOutlineAccountBook,
  AiOutlineDollarCircle,
  AiOutlineHistory,
  AiOutlineLogout,
  AiOutlineSecurityScan,
  AiOutlineMore,
  AiOutlineSetting,
} from "react-icons/ai";
import { NavItem } from "./NavItem";

interface NAVITEM {
  icon: React.ElementType;
  title: string;
  link: string;
}

const NAVITEMS: NAVITEM[] = [
  {
    icon: AiOutlineHome,
    title: "Home",
    link: "/home",
  },
  {
    icon: AiOutlineDollarCircle,
    title: "Vest Tokens ",
    link: "/vesting",
  },
  {
    icon: AiOutlineSecurityScan,
    title: "Dasboard",
    link: "/tokendashboard",
  },
  {
    icon: AiOutlineAccountBook,
    title: "Investements",
    link: "Investements",
  },
  {
    icon: AiOutlineSetting,
    title: "Features",
    link: "/",
  },
];

export const Navbar = () => {
  return (
    <nav className="w-full min-h-screen flex flex-col justify-between max-w-sm">
      <div className="py-32">
        <div className="flex flex-col justify-center  space-y-8 ">
          {NAVITEMS.map((navItem: NAVITEM) => {
            return (
              <NavItem
                link={navItem.link}
                classes="text-text"
                Icon={navItem.icon}
                title={navItem.title}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
};
