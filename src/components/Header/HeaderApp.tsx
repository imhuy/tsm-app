"use client";
import { FC, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import App from "next/app";

interface IHeader {
  title?: string;
}

const AppHeader: FC<IHeader> = ({ title }) => {
  const [searchText, setSearchtext] = useState("");
  return (
    <div className='flex justify-between items-center w-full'>
      <h1 className=' font-semibold text-white text-[36px] max-lg:hidden'>{title}</h1>
      <div className='flex flex-row gap-x-4  items-center '>
        <div className='relative mr-6 '>
          <MagnifyingGlassIcon className='w-5 h-5  text-white absolute  top-[11px] left-[8px]' />

          <input
            className='w-60  bg-[#2E3137] h-10  pl-8 text-white  '
            placeholder='Search'
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
        </div>

        <div className='  '>
          <span className='text-white  px-4 py-3 bg-[#2E3137] text-sm font-bold'>Individual</span>
        </div>
        <div className=''>
          <span className='text-white  px-4 py-3 bg-[#2E3137] text-sm font-bold'>Enterprise</span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
