import DashboardInfo from '@/components/DashboardInfo'
import Notes from '@/components/Notes'
import Todo from '@/components/Todo'
import React from 'react'

const page = () => {
  return (
    <div>
      <DashboardInfo/>
      <div className='flex mt-8 flex-col md:flex-row gap-6 w-full'>
        <Notes/>
        <Todo/>
      </div>
    </div>
  )
}

export default page