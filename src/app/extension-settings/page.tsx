"use client";

import AppHeader from "@/components/Header/HeaderApp";
import AppLayout from "@/components/Layout/AppLayout";
import { NextPage } from "next";
import Image from "next/image";
import { useReducer, useState } from "react";
import {
  AiFillEyeInvisible,
  AiFillFund,
  AiFillHourglass,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillReconciliation,
  AiFillShop,
  AiFillWallet,
} from "react-icons/ai";
import { BsFillBagFill, BsFillPersonVcardFill, BsPersonVcardFill } from "react-icons/bs";
import { LuCalendarSearch } from "react-icons/lu";
import Display from "./Item";
import Item from "./ItemComponent";
import "./page.css";
const LogoDetail = require("./logoDetail.png");

const AppPage: NextPage = () => {
  const [load, setLoad] = useState(false);

  const initialState = {
    isAccountStatus: true,
    isDaily: true,
    isThreshold: true,
    isBalance: true,
    isTotal: true,
    isCreation: true,
    isInvoice: true,
    isHidden: true,
    isAccountType: true,
    isTimeZone: true,
    isAccountName: true,
  };
  const UPDATE = "!";
  const RESET = "RESET";

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case UPDATE:
        return { ...state, [action.payload]: !state[action.payload] };
      case RESET:
        return initialState;
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUpdate = (key: string) => dispatch({ type: UPDATE, payload: key });

  const handleReset = (key: string) => {
    dispatch({ type: RESET, payload: key });
  };

  const handleSave = (key: string) => {
    // dispatch({ type: RESET, payload: key })
  };

  // useEffect(() => {
  //   console.log('state', state);
  // }, [load, state]);

  const {
    isAccountStatus,
    isDaily,
    isThreshold,
    isBalance,
    isTotal,
    isCreation,
    isInvoice,
    isHidden,
    isAccountType,
    isTimeZone,
    isAccountName,
  } = state;

  return (
    <AppLayout>
      <div className='w-full '>
        <div className='p-6 bg-[#12141e] mb-6'>
          <AppHeader title='Extension Settings' />
          <div className='h-[1px] bg-white  bg-opacity-20 my-4 max-lg:hidden' />
        </div>
        <div className=' flex justify-around'>
          <div className=' px-4'>
            <div className=' grid grid-cols-7 gap-x-8 w-[95%]'>
              <div className=' col-span-5'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-2 gap-[10px]'>
                  <Item
                    isCheck={isAccountStatus}
                    key={1}
                    onClick={() => handleUpdate("isAccountStatus")}
                    title='Account status'
                  />
                  <Item
                    isCheck={isDaily}
                    key={2}
                    onClick={() => handleUpdate("isDaily")}
                    title='Daily spending limitation'
                  />
                  <Item isCheck={isThreshold} key={3} onClick={() => handleUpdate("isThreshold")} title='Threshold' />
                  <Item isCheck={isBalance} key={4} onClick={() => handleUpdate("isBalance")} title='Balance' />
                  <Item
                    isCheck={isTotal}
                    key={5}
                    onClick={() => handleUpdate("isTotal")}
                    title='Total amount spending'
                  />
                  <Item isCheck={isCreation} key={6} onClick={() => handleUpdate("isCreation")} title='Creation time' />
                  <Item isCheck={isInvoice} key={7} onClick={() => handleUpdate("isInvoice")} title='Invoice time' />
                  <Item isCheck={isHidden} key={8} onClick={() => handleUpdate("isHidden")} title='Hidden admin' />
                  <Item
                    isCheck={isAccountType}
                    key={9}
                    onClick={() => handleUpdate("isAccountType")}
                    title='Account type'
                  />
                  <Item isCheck={isTimeZone} key={10} onClick={() => handleUpdate("isTimeZone")} title='Timezone' />
                  <Item
                    isCheck={isAccountName}
                    key={11}
                    onClick={() => handleUpdate("isAccountName")}
                    title='Account name'
                  />
                </div>
                <div className=' flex w-full justify-around  mt-4 '>
                  <button
                    onClick={(e) => handleReset(RESET)}
                    className=' w-[30%] hover:bg-slate-400 active:bg-blue-500  bg-gray-400 h-[40px] rounded-lg   flex items-center justify-center'
                  >
                    <p className=' text-[#ffffff] text-center'>Reset</p>
                  </button>

                  <button
                    onClick={(e) => handleSave(RESET)}
                    className=' hover:bg-blue-700 active:bg-blue-500 bg-[#1877f2] h-[40px] rounded-lg w-[65%] flex items-center justify-center'
                  >
                    <p className=' text-[#ffffff] text-center'>Save</p>
                  </button>
                </div>
              </div>

              <div className='col-span-2 '>
                <div className=' bg-gradient-to-r from-[#007E59] to-[#007E59]  '>
                  <div className='showTop'>
                    <div className='flex flex-row w-full justify-between  mx-4 '>
                      <div className=' flex  items-center '>
                        <div className=' bg-white p-1 rounded-sm mx-2'>
                          <LuCalendarSearch color='#1577f2' size={16} />
                        </div>
                        <p className=' text-white text-xs font-semibold'>Ads Check By Tsmmeta.com</p>
                      </div>

                      <a href='https://tsmmeta.com/' target='_blank' className='no-underline-link'>
                        <button className=' bg-white px-3 py-1 rounded-sm'>
                          <p className='text-[#1767d6] font-semibold text-sm'>TsmMeta</p>
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className='flex flex-col bg-[#e7f8ff] border pt-4 bg-gradient-to-r from-[#F8F9FE] to-[#D5F6FD] shadow-md'>
                    <Display
                      icon={<AiFillShop color='#1577f2' size={22} />}
                      title={"Account's status"}
                      value='MXN | Hoạt động'
                      check={isAccountStatus}
                    />

                    <Display
                      icon={<AiFillMinusCircle color='#1577f2' size={22} />}
                      title='Daily spending limitation'
                      value='536 MXN'
                      id='1'
                      check={isDaily}
                    />

                    <Display
                      icon={<AiFillFund color='#1577f2' size={22} />}
                      title='Threshold'
                      value='-'
                      check={isThreshold}
                    />

                    <Display
                      icon={<AiFillWallet color='#1577f2' size={22} />}
                      title='Balance'
                      value='0 MXN'
                      check={isBalance}
                    />

                    <Display
                      icon={<BsFillBagFill color='#1577f2' size={22} />}
                      title='Total amount spending'
                      value='0 MXN'
                      check={isTotal}
                    />

                    <Display
                      icon={<AiFillPlusCircle color='#1577f2' size={22} />}
                      title='Creation time'
                      value='12/09/2020'
                      check={isCreation}
                    />

                    <Display
                      icon={<AiFillReconciliation color='#1577f2' size={22} />}
                      title='Invoice time'
                      value='04/01/2024'
                      check={isInvoice}
                    />

                    <Display
                      icon={<AiFillEyeInvisible color='#1577f2' size={22} />}
                      title='Hidden admin'
                      value='0'
                      check={isHidden}
                    />

                    <Display
                      icon={<BsFillPersonVcardFill color='#1577f2' size={22} />}
                      title='Account type'
                      value='Personal Account'
                      id='2'
                      accType='Individual'
                      check={isAccountType}
                    />

                    <Display
                      icon={<AiFillHourglass color='#1577f2' size={22} />}
                      title='Timezone'
                      value='-8 | America/Tijuana'
                      check={isTimeZone}
                    />

                    <Display
                      icon={<BsPersonVcardFill color='#1577f2' size={22} />}
                      title='Account name'
                      value='Huy Lưu'
                      check={isAccountName}
                    />
                  </div>

                  <div className=' flex  justify-between mx-2  py-2'>
                    <div className=' flex  items-center     '>
                      <p>
                        <span className=' text-white font-bold text-sm'>TsmMeta.com</span>{" "}
                        <span className=' text-xs text-white '> - Solution for advertisers</span>
                      </p>
                    </div>

                    <div className=' w-10 h-10 text-white   bg-white rounded-md '>
                      <Image
                        className=' fill-white'
                        color='#ffffff'
                        alt='Logo'
                        src={LogoDetail}
                        width={100}
                        height={200}
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AppPage;
