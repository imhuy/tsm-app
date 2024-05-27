'use client'
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { GrPowerReset } from "react-icons/gr";

interface Props {
    title?: string;
    categoryQuery?: string;
    isCheck?: boolean;
    onClick?: any;
    id?: any;
    reset?: any
}


const AppPage: NextPage<Props> = ({ title, isCheck, onClick, id }) => {
    const [isCheckItem, setCheckItem] = useState(isCheck);


    useEffect(() => {
        setCheckItem(isCheck)
    }, [isCheckItem, isCheck]);


    const handleClick = () => {
        setCheckItem(!isCheckItem);
        onClick();
    }


    return (
        <div className="p-2">

            <div className=" h-[70px] flex flex-row border-2 border-solid border-blue-500 rounded-lg justify-between  px-2 items-center">
                <div className="  p-[7px] w-[70%]">
                    <p className=" justify-center items-center truncate">{title}</p>
                </div>

                <label className=" relative inline-flex items-center cursor-pointer">
                    <input value='' type="checkbox" className="sr-only peer" checked={isCheckItem} onChange={() => {
                        handleClick()
                    }} />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                    </div>
                </label>


            </div>

        </div>
    )

};

export default AppPage;
