import { BoxesIcon } from 'lucide-react'
import React from 'react'

const Auctions = () => {
  return (
     <div className='w-full flex items-center justify-center h-96'>
     <div className="w-1/2 gap-4 grid mx-auto my-auto justify-center items-center">
          <BoxesIcon className="w-20 h-20 mx-auto text-gray-400" />
          
          <div className=' grid text-center w-3/4 mx-auto'>

          <span className="text-gray-500 text-lg text-center">
            There are no stocks for auctions yet.
          </span>
            <span className="text-gray-500 text-lg text-center">
             The auction market opens at 2:30 PM. Stocks eligible to be sold in the auction will be listed here.
            </span>
          <a href="#" className='text-blue-500 px-1'>Read more</a>
          </div>
          
          </div>
    </div>
  )
}

export default Auctions
