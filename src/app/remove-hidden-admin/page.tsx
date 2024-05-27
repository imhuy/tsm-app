"use client";

import AppLayout from "@/components/Layout/AppLayout";
import { NextPage } from "next";
import { useState } from "react";

import { TrashIcon, PencilSquareIcon, UserCircleIcon, EyeIcon } from "@heroicons/react/24/outline";
import AppHeader from "@/components/Header/HeaderApp";

const AppPage: NextPage = () => {
  const Acc = [
    {
      status: 1,
      name: "Huy Lưu",
      sodu: 146,
      nguong: 10,
      nguongconlai: 0,
      limit: 2132,
      tongchi: 1200000,
      gioihan: 999,
      tiente: "VND",
      quyen: "Admin",
      ptThanhtoan: "visa",
      ngaylaphoadon: "24 dec 2023",
      lydobikhoa: "unknow",
      ngaytaotk: "10 dec 20",
      loaitaikhoan: "Individual",
      muigio: "America/Los_Angeles | -8",
      chusohuu: "unknow",
      quocgia: "VN",
    },
    {
      status: 2,
      name: "Huy Lưu",
      sodu: 0,
      nguong: 10,
      nguongconlai: 0,
      limit: 2132,
      tongchi: 12,
      gioihan: 999,
      tiente: "VND",
      quyen: "Admin",
      ptThanhtoan: "visa",
      ngaylaphoadon: "24 dec 2023",
      lydobikhoa: "unknow",
      ngaytaotk: "10 dec 20",
      loaitaikhoan: "ca nhan",
      muigio: "America",
      chusohuu: "unknow",
      quocgia: "VN",
    },
    {
      status: 1,
      name: "Huy Lưu",
      sodu: 0,
      nguong: 10,
      nguongconlai: 1,
      limit: 2132,
      tongchi: 12,
      gioihan: 999,
      tiente: "VND",
      quyen: "Admin",
      ptThanhtoan: "visa",
      ngaylaphoadon: "24 dec 2023",
      lydobikhoa: "unknow",
      ngaytaotk: "10 dec 20",
      loaitaikhoan: "ca nhan",
      muigio: "America",
      chusohuu: "unknow",
      quocgia: "VN",
    },
  ];

  const hiddenAdmin = [
    { id: "100015756214816", name: "Người Dùng Facebook" },
    { id: "100015756214816", name: "Người Dùng Facebook" },
    { id: "100015756214816", name: "Người Dùng Facebook" },
    { id: "100015756214816", name: "Người Dùng Facebook" },
  ];

  const [showPopUp, setShowPopUp] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const renderStatus = (code: number) => {
    switch (code) {
      case 1:
        return (
          <div className='flex  items-center gap-x-1  text-start   '>
            {" "}
            <div className=' w-1 h-1 rounded-full bg-green-500'></div>{" "}
            <span className=' text-green-600 font-semibold'> Active</span>{" "}
          </div>
        );
      case 2:
        return (
          <div className='flex   items-center gap-x-1 text-start   '>
            {" "}
            <div className=' w-1 h-1 rounded-full bg-red-600'></div>{" "}
            <span className=' text-red-600 font-semibold'> Disable</span>{" "}
          </div>
        );
      default:
        return "-";
    }
  };

  const formatCurrency = (number: any) => {
    try {
      let numberConvert = parseFloat(number);
      if (!isNaN(numberConvert)) {
        return numberConvert.toLocaleString("en-US");
      }
      return 0;
    } catch (error) {
      return 0;
    }
  };

  const changePopUp = () => {
    setShowPopUp(!showPopUp);
  };
  const changeConfirm = () => {
    setShowModalConfirm(!showModalConfirm);
  };

  const renderPupup = () => {
    return (
      <div
        id='popup-modal'
        tabIndex={-1}
        className=' bg-opacity-80  bg-gray-200 flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  z-30 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative p-4 w-full max-w-md max-h-full'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <button
              onClick={() => changePopUp()}
              type='button'
              className='absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-hide='popup-modal'
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <button onClick={() => changePopUp()}>
                <span className='sr-only'>Close modal</span>
              </button>
            </button>

            <div className=' md:p-5 text-center'>
              <h3 className='mb-4 text-lg font-semibold text-gray-800 dark:text-gray-400'>Hidden Admin List</h3>

              <hr />

              <div className=' my-4'>
                {hiddenAdmin.map((item, i) => (
                  <div key={i} className='  grid grid-cols-8  py-2 pl-4 items-center  hover:bg-gray-300'>
                    <div className=' col-span-1  '>
                      <UserCircleIcon className='w-6 h-6 text-black  ' />
                    </div>
                    <div className=' col-span-6 bg flex flex-col  items-start'>
                      <p className=' text-base font-sans font-semibold'>{item.name}</p>
                      <p className=' text-sm font-sans text-slate-600'>{item.id}</p>
                    </div>
                    <div className=' col-span-1'>
                      <button onClick={() => changeConfirm()}>
                        <TrashIcon className='w-5 h-5   text-black  ' />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <hr />

              <div className='mt-2  flex items-center'>
                <button
                  onClick={() => changePopUp()}
                  data-modal-hide='popup-modal'
                  type='button'
                  className=' text-start text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5   me-2'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderModalconfirm = () => {
    return (
      <div
        id='popup-modal'
        tabIndex={-1}
        className=' bg-opacity-80  bg-gray-200 flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  z-30 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative p-4 w-full max-w-md max-h-full'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <button
              onClick={() => changeConfirm()}
              type='button'
              className='absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-hide='popup-modal'
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
            </button>

            <div className=' md:p-5 text-center'>
              <h3 className='mb-4 text-lg font-semibold text-gray-800 dark:text-gray-400'>Delete Hidden Admin</h3>

              <hr />

              <div className=' my-4'>
                <p>Are you sure want to delete? </p>
                <div className='flex   flex-row justify-center gap-x-1 mt-2 '>
                  <p>Hidden admin: </p>
                  <p className=' font-semibold'> 100015756214816</p>
                </div>
              </div>
              <hr />

              <div className='mt-2  flex items-center justify-between'>
                <button
                  onClick={() => changeConfirm()}
                  data-modal-hide='popup-modal'
                  type='button'
                  className=' text-start text-blue-700 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5   me-2'
                >
                  <PencilSquareIcon className='w-4 h-4 text-blue-700  mr-1 ' />
                  Confirm
                </button>

                <button
                  onClick={() => setShowModalConfirm(false)}
                  type='button'
                  className=' text-start text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2   me-2'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AppLayout>
      <div className='w-full relative '>
        <div className='p-6 bg-[#12141e]'>
          <AppHeader title='Remove Hidden Admin' />
          <div className='h-[1px] bg-white  bg-opacity-20 my-4 max-lg:hidden' />
        </div>
        <div className='scrollmenu  '>
          {showPopUp && renderPupup()}
          {showModalConfirm && renderModalconfirm()}
          <table>
            <thead>
              <tr className='flex gap-x-6 px-5 mb-5 mt-2'>
                <th className=' w-20  text-start'>
                  <span className=' font-semibold text-sm'>Status </span>{" "}
                </th>
                <th className=' w-16 max-w-[80px]  text-center'>
                  <span className='font-semibold text-sm '>Surplus</span>{" "}
                </th>
                <th className=' w-40  text-center'>
                  <span className=' font-semibold text-sm'>Hidden Adminn </span>{" "}
                </th>
                <th className=' w-40    text-center'>
                  <span className=' font-semibold text-sm'>Limit </span>{" "}
                </th>
                <th className=' w-32  text-center'>
                  <span className=' font-semibold text-sm'>Total Spending</span>{" "}
                </th>
                <th className=' w-32  text-center'>
                  <span className=' font-semibold text-sm'>Spending Limit</span>{" "}
                </th>
                <th className=' w-20  text-center'>
                  <span className=' font-semibold text-sm'>Currency</span>{" "}
                </th>
                <th className=' w-16  text-center'>
                  <span className=' font-semibold text-sm'>Ownership</span>{" "}
                </th>
                <th className=' w-32  text-center'>
                  <span className=' font-semibold text-sm'>Payment Methods</span>{" "}
                </th>
                <th className=' w-32   text-center'>
                  <span className=' font-semibold text-sm'>Invoice date</span>{" "}
                </th>
                <th className=' w-20  text-center'>
                  <span className=' font-semibold text-sm  '>Lock reason</span>{" "}
                </th>
                <th className=' w-44  text-center'>
                  <span className=' font-semibold text-sm  '> Account Creation Date</span>{" "}
                </th>
                <th className=' w-32  text-center   '>
                  <span className=' font-semibold text-sm  '>Account type</span>{" "}
                </th>
                <th className=' w-48  text-center  '>
                  <span className=' font-semibold text-sm  '>Time Zone</span>{" "}
                </th>
                <th className=' w-20  text-center    '>
                  <span className=' font-semibold text-sm  '>Owner</span>{" "}
                </th>
                <th className=' w-32  text-center'>
                  <span className=' font-semibold text-sm  '>Nation</span>{" "}
                </th>
              </tr>
            </thead>

            <tbody>
              {[...Acc].map((item, i) => (
                <tr key={i} className={`flex  gap-x-6 py-5  px-5 border-b  ${i % 2 == 0 ? "bg-slate-100" : ""}`}>
                  <td className=' text-start  w-20  '>
                    <span className='font-normal text-sm'>{renderStatus(item.status)} </span>
                  </td>
                  <td className='text-center font-normal text-sm w-16 max-w-[80px]  '>
                    <span className=' font-normal text-sm  '>{item.sodu} </span>
                  </td>
                  <td className='text-center font-normal text-sm w-40'>
                    <span className=' text-sm  font-semibold  text-red-600'>
                      <button onClick={() => changePopUp()}>
                        <>
                          <span className='relative inline-block'>
                            <EyeIcon className='w-5 h-5 font-semibold  text-gray-700  mr-1 ' />
                            <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                              {item.nguongconlai}
                            </span>
                          </span>
                        </>
                      </button>
                    </span>
                  </td>
                  <td className='text-center font-normal text-sm w-40'>
                    <span className=' font-normal text-sm  '>{item.limit}</span>
                  </td>
                  <td className='text-center font-normal text-sm w-32    '>
                    <span className=' font-normal text-sm  '>{formatCurrency(item.tongchi)}</span>
                  </td>
                  <td className='text-center font-normal text-sm w-32    '>
                    <span className=' font-normal text-sm  '>-</span>
                  </td>
                  <td className='text-center font-normal text-sm w-20    '>
                    <span className=' font-normal text-sm  '>{item.tiente}</span>
                  </td>

                  <td className='text-center font-normal text-sm w-16    '>
                    <span className=' font-normal text-sm  '>{item.quyen}</span>
                  </td>

                  <td className='text-center font-normal text-sm w-32    '>
                    <span className=' font-normal text-sm  '>{item.ptThanhtoan}</span>
                  </td>

                  <td className='text-center font-normal text-sm w-32    '>
                    <span className=' font-normal text-sm  '>{item.ngaylaphoadon}</span>
                  </td>

                  <td className='text-center font-normal text-sm w-20    '>
                    <span className=' font-normal text-sm  '>-</span>
                  </td>

                  <td className='text-center font-normal text-sm w-44    '>
                    <span className=' font-normal text-sm  '>{item.ngaytaotk}</span>
                  </td>

                  <td className='text-center font-normal text-sm w-32      '>
                    <span className=' font-normal text-sm  '>{item.loaitaikhoan}</span>
                  </td>

                  <td className='text-center font-normal text-sm w-48     '>
                    <span className=' font-normal text-sm  '>{item.muigio}</span>
                  </td>

                  <td className='text-center font-normal text-sm w-20      '>
                    <span className=' font-normal text-sm  '>{item.chusohuu}</span>
                  </td>
                  <td className='text-center font-normal text-sm w-32    '>
                    <span className=' font-normal text-sm  '>{item.quocgia}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
};

export default AppPage;
