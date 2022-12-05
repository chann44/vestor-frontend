import { ReactNode } from "react";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="w-full lg:grid grid-cols-12 iiiiiimmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmllmlmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm mm">
      <div className="min-h-screen col-start-1 col-span-2 xl:flex justify-center w-full  p-5  hidden">
        <Navbar />
      </div>
      <div className="min-h-screen col-start-3 col-span-7 bg-secondaryDark xl: ">
        {children}
      </div>
      <div className="min-h-screen col-start-10 col-span-3 hidden xl:block ">
        <Sidebar />
      </div>
    </div>
  );
};
