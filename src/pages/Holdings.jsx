import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Holdings = () => {
  return (
    <>
    
    <div className='flex gap-10 border-b px-4 pb-2 border-gray-300'>
      <NavLink  to='/holdings/all' className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
        <p>
          All
        </p>
      </NavLink>
      <NavLink end={true}  to="/holdings" className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white  hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
      <p>
        Equity
      </p>
      </NavLink>
      <NavLink to="/holdings/mutualfunds" className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
      <p>
        Mutual funds
      </p>
      </NavLink>
     

    </div>
      <div className='p-4'>
        <Outlet />
      </div>
    </>
  )
}

export default Holdings
