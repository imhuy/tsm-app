import SideMenu from "@/components/Layout/SideMenu";
import React, { FC } from "react";

interface AppLayoutTypes {
  children: any;
}

const AppLayout: FC<AppLayoutTypes> = ({ children }) => {
  return (
    <div>
      <div className='flex pl-64  bg-[#E9F2FD] max-lg:pl-0'>
        {children}
        {/* <SideMenu /> */}
      </div>
    </div>
  );
};

export default AppLayout;
