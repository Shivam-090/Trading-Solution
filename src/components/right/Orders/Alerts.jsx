import { BoxesIcon } from 'lucide-react';
import React, { useState } from 'react'

const Alerts = () => {
  const [show, setShow] = useState(false)

  const handleToggle = () => {
    setShow(!show);
  }
  return (
    <div className='w-full flex items-center justify-center h-96'>
     <div className="w-1/2 gap-4 grid mx-auto my-auto justify-center items-center">
          <BoxesIcon className="w-20 h-20 mx-auto text-gray-400" />
          

          <span className="text-gray-500 text-lg text-center">
            You haven't created any alerts.
          </span>
           
          <button
            onClick={handleToggle}
            className="text-white text-md bg-blue-400 w-1/2 mx-auto py-2  rounded-md cursor-pointer  border-blue-600 hover:bg-blue-300"
          >
            Create new alert      </button>
          
          </div>
    </div>
  )
}

export default Alerts
