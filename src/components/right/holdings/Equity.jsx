import { BoxesIcon, CircleArrowRightIcon } from 'lucide-react';
import React, { useState } from 'react'

const Equity = () => {
    const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  }
  return (
    <>
    <div className='flex gap-3 items-center'>
        <span className='text-gray-700 text-xl'>Holdings</span>
        <select className='border bg-white border-gray-300 px-4 text-xs text-gray-700' name="holdingsEquity" id="">
            <option value="allEquity">All equity</option>
            <option value="mts">MTS</option>
            <option value="kiteOnly">Kite only</option>
            <option value="smallCase">Smallcase</option>
        </select>
    </div>
    <div className='w-full flex items-center justify-center h-96'>
     <div className="w-1/2 gap-4 grid mx-auto my-auto justify-center items-center">
          <BoxesIcon className="w-20 h-20 mx-auto text-gray-400" />
          <span className="text-gray-500 text-lg text-center">
            You don't have any stocks in your DEMAT yet. get started with absolutely free equity investments.
          </span>
          <button
            onClick={handleToggle}
            className="text-white text-md bg-blue-400 w-1/2 mx-auto py-3 rounded-md cursor-pointer  border-blue-600 hover:bg-blue-300"
            >
            Get started
          </button>
          <div className="flex items-center mx-auto gap-3">
                  <CircleArrowRightIcon className="w-5 text-blue-500" />
                  <a
                    className="text-md font-semibold text-blue-600"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Analytics
                  </a>
                </div>
          </div>
    </div>
                      </>
  )
}

export default Equity
