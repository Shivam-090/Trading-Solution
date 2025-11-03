import { BoxesIcon } from 'lucide-react'
import React from 'react'

const Sse = () => {
  return (
    <div className='w-full flex items-center justify-center h-96'>
     <div className="w-1/2 gap-4 grid mx-auto my-auto justify-center items-center">
          <BoxesIcon className="w-20 h-20 mx-auto text-gray-400" />
          
          <div className=' grid text-center w-3/4 mx-auto'>

          <span className="text-gray-500 text-lg text-center">
            No active Social Excjange (SSE) issue.
          </span>
            <span className="text-gray-500 text-lg text-center">
            SSE allows non-profits to raise funds fore their causes.
            </span>
          <a href="#" className='text-blue-500 px-1'>Learn more</a>
          </div>
          
          </div>
    </div>
  )
}

export default Sse
