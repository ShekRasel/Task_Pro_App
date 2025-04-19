import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const settings = () => {
  
  return (
    <div className='flex flex-col md:flex-row gap-4'>
      <div className='w-full  border p-4 rounded-md '>
        <div className='flex justify-center'>

        <Image src={'/images/profile.jpg'} height={100} width={100} alt='Profile Image' className='rounded-full w-12 h-12'/>
        </div>
        <form className='flex flex-col gap-4 mt-4'>
          <input type="text" placeholder='First Name' className='w-full font-semibold  px-2 py-1.5 border outline-none' value={'Mr Jhon'} readOnly/>
          <input type="text" placeholder='Last Name' className='w-full font-semibold  px-2 py-1.5 border outline-none' value='ChakraVorti' readOnly/>
          <input type="email" className='w-full font-semibold px-2 py-1.5 border outline-none' value={"Jhon@gmail.com"} placeholder='Email' readOnly/>
        </form>

        <Button className='rounded-sm mt-8 w-full'>Update</Button>
      </div>
      <div className='w-full h-72 border rounded-md p-4 font-semibold'>
        <h1 className='border-b pb-2'>Invitations</h1>
        <div className='w-full h-full flex justify-center items-center'>
          <h1 className='text-xl'>No one join</h1>
        </div>
      </div>
    </div>
  )
}

export default settings