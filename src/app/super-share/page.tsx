"use client";
import AppLayout from "@/components/Layout/AppLayout";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";

import Image from "next/image";
import AppHeader from "@/components/Header/HeaderApp";
import { Comingsoon } from "@/assets/images";

const AppPage: NextPage = () => {
  const [time, setTime] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const targetDate = new Date("2024-01-29");
    targetDate.setDate(targetDate.getDate() + 10); // Thêm 10 ngày

    const difference = targetDate.getTime() - now.getTime();

    return Math.max(0, Math.floor(difference / 1000));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const remainingTime = prevTime - 1;

        if (remainingTime === 0) {
          clearInterval(timer);
        }

        return remainingTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: any) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${days}D: ${hours}H: ${minutes}m: ${remainingSeconds}s`;
  };

  return (
    <AppLayout>
      <div className='w-full'>
        <div className='p-6 bg-[#12141e] mb-6'>
          <AppHeader title='Coming Soon!' />
          <div className='h-[1px] bg-white  bg-opacity-20 my-4 max-lg:hidden' />
        </div>
        <div className=' h-[400px] flex justify-center items-center'>
          <Image alt='Comingsoon' src={Comingsoon} width={400} height={400}></Image>
        </div>
        <div className=''>
          {time > 0 && (
            <p className='text-4xl text-center text-[#007e59] font-extrabold p-4 rounded'>{formatTime(time)}</p>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default AppPage;
