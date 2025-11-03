import { Bell, Circle, List, ShoppingBag, Star } from "lucide-react";
import { NavLink } from "react-router-dom";

import React from "react";


const Navbar = ({onUserClick, showProfile, listClick, listShow}) => {
 

  return (
    <div className="py-2 flex  sm:w-full overflow-auto items-center justify-between sm:px-4">
      <div className="flex items-center w-full justify-between sm:px-2 mx-2 border-gray-300 border-r">
        <div className="flex gap-2">
          <div onClick={listClick} className={`flex lg:hidden items-center gap-2 cursor-pointer ${
            listShow ? "text-blue-400" : "hover:text-blue-400"
          }`}>

          <List />
          </div>
        <NavLink className={`mr-1`} to="/">
          <Star />
        </NavLink>
        </div>

        <div className="flex gap-5">
          <NavLink
            end={true}
            to="/"
            className={({ isActive }) =>
              ` hover:text-blue-300 text-sm  ${
                isActive ? "text-blue-400 font-semibold" : "text-gray-500"
              }`
            }
          >
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              ` hover:text-blue-300 text-sm ${
                isActive ? "text-blue-400 font-semibold" : "text-gray-500"
              }`
            }
          >
            <p>Orders</p>
          </NavLink>
          <NavLink
            to="/holdings"
            className={({ isActive }) =>
              ` hover:text-blue-300 text-sm ${
                isActive ? "text-blue-400 font-semibold" : "text-gray-500"
              }`
            }
          >
            <p>Holdings</p>
          </NavLink>
          <NavLink
            to="/positions"
            className={({ isActive }) =>
              ` hover:text-blue-300 text-sm ${
                isActive ? "text-blue-400 font-semibold" : "text-gray-500"
              }`
            }
          >
            <p>Positions</p>
          </NavLink>
          <NavLink
            to="/Bids"
            className={({ isActive }) =>
              ` hover:text-blue-300 text-sm ${
                isActive ? "text-blue-400 font-semibold" : "text-gray-500"
              }`
            }
          >
            <p>Bids</p>
          </NavLink>
          <NavLink
            to="/Funds"
            className={({ isActive }) =>
              ` hover:text-blue-300 text-sm ${
                isActive ? "text-blue-400 font-semibold" : "text-gray-500"
              }`
            }
          >
            <p>Funds</p>
          </NavLink>
        </div>
      </div>
      <div className="sm:flex hidden relative gap-3">
        <div className="flex gap-2">
          <Bell className="w-4 cursor-pointer hover:text-blue-400" />
          <ShoppingBag className="w-4 cursor-pointer hover:text-blue-400" />
        </div>
        <div  onClick={onUserClick}
          className={`flex items-center gap-2 cursor-pointer ${
            showProfile ? "text-blue-400" : "hover:text-blue-400"
          }`}>
          <Circle className="w-4" />
          <span className="text-sm">UserName</span>
        </div>
      </div>

      <div onClick={onUserClick}
          className={`flex sm:hidden items-center gap-2 cursor-pointer ${
            showProfile ? "text-blue-400" : "hover:text-blue-400"
          }`}>
        <Circle className="w-4" />

      </div>
      
    </div>
  );
};

export default Navbar;
