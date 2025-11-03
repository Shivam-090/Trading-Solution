import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Orders = () => {
  return (
    <>
    
    <div className='flex gap-7 sm:gap-10 border-b px-4 pb-2 border-gray-300'>
      <NavLink end={true}  to='/orders' className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
        <p>
          Orders
        </p>
      </NavLink>
      <NavLink to="/orders/gtt" className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white  hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
      <p>
        GTT
      </p>
      </NavLink>
      <NavLink to="/orders/baskets" className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
      <p>
        Baskets
      </p>
      </NavLink>
      <NavLink to="/orders/sip" className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
      <p>
        SIP
      </p>
      </NavLink>
      <NavLink to="/orders/alerts" className={({ isActive }) =>
              ` hover:text-blue-300 py-1 text-sm  ${
                isActive ? "text-white hover:text-white bg-blue-400 px-2 rounded-md border-blue-600 font-semibold" : "text-gray-500"
              }`
            }>
      <p>
        Alerts
      </p>
      </NavLink>

    </div>
      <div className='p-4'>
        <Outlet />
      </div>
    </>
  )
}

export default Orders
