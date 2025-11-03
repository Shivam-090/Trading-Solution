import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Bids = () => {
  return (
    <>
    
    <div className='flex gap-3 sm:gap-10  border-b  px-4 pb-2 border-gray-300'>
      <NavLink end={true}  to='/bids' className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
        <p>
          IPO
        </p>
      </NavLink>
      <NavLink to="/bids/gsecs" className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white  hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
      <p>
        Govt. securities
      </p>
      </NavLink>
      <NavLink to="/bids/auctions" className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
      <p>
        Auctions
      </p>
      </NavLink>
      <NavLink to="/bids/corporateactions" className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
      <p>
        Corporate actions
      </p>
      </NavLink>
      <NavLink to="/bids/sse" className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
      <p>
        SSE
      </p>
      </NavLink>

    </div>
      <div className='p-4'>
        <Outlet />
      </div>
    </>
  )
}

export default Bids
