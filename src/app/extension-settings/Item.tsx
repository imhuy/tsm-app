'use client'
import { memo, useEffect, useState } from 'react';
const Item = ({ icon, title, value, accType, id, check }: any) => {
  const [isShowItem, setIsShowItem] = useState(check)
  useEffect(() => {
    setIsShowItem(check);
  }, [check]);

  const renderAcc = () => {
    return (
      <div className='mr-2' >
        {id == 2 ?
          <div className="flex">
            <p className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 rounded-3xl">{accType}</p>
          </div> :
          <p> {value} </p>
        }
      </div>
    )
  }
  return (
    <>
      {isShowItem &&
        <div className="flex items-center justify-between mb-6 font-sans text-sm font-semibold">
          <div className='flex'>
            <div className="mx-2">{icon}</div>
            <div className="flex "> <p>{title} </p> </div>
          </div>
          {renderAcc()}

        </div >
      }
    </>
  );
}

export default memo(Item);