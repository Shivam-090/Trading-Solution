import { BoxesIcon } from 'lucide-react'
import React from 'react'

const GovtSecurities = () => {
    return (
    <div className='w-full flex items-center justify-center h-96'>
     <div className="w-1/2 gap-4 grid mx-auto my-auto justify-center items-center">
          <BoxesIcon className="w-20 h-20 mx-auto text-gray-400" />
          
          <div className=''>

          <span className="text-gray-500 text-lg text-center">
            No securities available for bidding currently.
          </span>
          <a href="#" className='text-blue-500 px-1'>Learn more</a>
          </div>
          
          </div>
    </div>
  )
}

export default GovtSecurities
