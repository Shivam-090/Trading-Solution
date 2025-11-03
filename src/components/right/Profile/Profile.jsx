import { CircleAlert, CircleArrowDown, CircleQuestionMark, Coins, Keyboard, LogOut, Pencil, PersonStanding, PieChart, PlusCircle } from 'lucide-react'
import React, { useState } from 'react'

const Profile = () => {

   
 const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };


  return (
    <div className='bg-white w-full border border-gray-300'>
      
        <div className='flex items-center py-2 bg-gray-100 border-b border-gray-300 justify-between px-2'>
            <div className='grid'>
            <span className='text-lg text-gray-700'>
                User
            </span>
            <span className='text-xs'>
                User00@gmail.com
            </span>
            </div>
            <Pencil className='w-4 text-gray-600' />
        </div>
        <div className='flex items-center justify-between border-b border-gray-300 p-2'>
            <span className='text-gray-600 text-sm'>
                Privacy mode
            </span>
        <label className="relative inline-block w-10 h-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          className="opacity-0 w-0 h-0 peer"
        />
        <span
          className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-all duration-300
            ${checked ? "bg-blue-500" : "bg-gray-300"}
            rounded-full
            after:content-[''] after:absolute after:h-2 after:w-2
            after:left-1 after:bottom-1 after:bg-white after:transition-all after:duration-300
            ${checked ? "after:translate-x-[26px]" : ""}
            after:rounded-full
          `}
        ></span>
      </label>
        </div>
        <div className='p-2 space-y-2 border-b border-gray-300'>
            <div className='flex gap-2'>
                <PieChart className='w-4' />
                <span className='text-sm'>
                    Console
                </span>

            </div>
            <div className='flex gap-2'>
                 <Coins className='w-4' />
                <span className='text-sm'>
                    Console
                </span>

            </div>
            <div className='flex gap-2'> 
                <CircleAlert className='w-4' />
                <span className='text-sm'>
                    Console
                </span>

            </div>
            <div className='flex gap-2'>
                <PlusCircle className='w-4' />
                <span className='text-sm'>Invite friends</span>
            </div>

        </div>
        <div className='p-2 space-y-2'>
            <div className='flex gap-2'>
                <Keyboard className='w-4' />
                <span className='text-sm'>Keyboard shortcuts</span>
            </div>
            <div className='flex gap-2'>
                <CircleQuestionMark className='w-4' />
                <span className='text-sm'>User manual</span>
            </div>
            <div className='flex gap-2'>
                <LogOut className='w-4' />
                <span className='text-sm'>Logout</span>
            </div>
        </div>
    </div>
  )
}

export default Profile
