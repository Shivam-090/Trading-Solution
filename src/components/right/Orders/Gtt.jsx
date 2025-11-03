import { BoxesIcon, CircleArrowRightIcon } from 'lucide-react';
import React, { useState } from 'react'

const Gtt = () => {
    const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  }
  return (
    <div className='w-full flex items-center justify-center h-96'>
     <div className="w-1/2 gap-4 grid mx-auto my-auto justify-center items-center">
          <BoxesIcon className="w-20 h-20 mx-auto text-gray-400" />
          <div>

          <span className="text-gray-500 text-lg text-center">
            You Have not created any triggers. 
          </span>
            <a href="#" className="text-blue-400 text-lg text-center pr-1 "> Learn more</a>
            <span className="text-gray-500 text-lg text-center" >about setting automatic stopless and target orders for you holdings.</span>
          </div>
          <button
            onClick={handleToggle}
            className="text-white text-md bg-blue-400 w-1/2 mx-auto py-3 rounded-md cursor-pointer  border-blue-600 hover:bg-blue-300"
          >
            New GTT
          </button>
          
          </div>
    </div>
  )
}

export default Gtt
