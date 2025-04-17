import { Bell } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Profile from './Profile'
import Notification from './Notification'

const Header = () => {
  return (
    <div className='w-full bg-[#ECF2F4] flex justify-between h-16 px-2 md:px-10 xl:px-66 items-center'>
      <h1 className='text-2xl'>TaskPro</h1>
      <div className='flex gap-4 items-center '>
        <input type="text" placeholder='Search..' className='rounded-sm px-4 outline bg-white hidden md:block h-10 w-72'/>
        {/*notification section*/}
        <span className='p-2 rounded-sm bg-white flex items-center justify-center'>
         <Notification/>
        </span>
        {/* profile section*/}
       <Profile/>
      </div>
    </div>
  )
}

export default Header