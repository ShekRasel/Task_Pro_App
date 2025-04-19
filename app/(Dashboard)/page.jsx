import DashboardInfo from '@/components/DashboardInfo'
import Notes from '@/components/Notes'
import Projects from '@/components/Projects'
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
      <div className='mt-6'>
        <h1 className='text-2xl pb-4'>Projects</h1>
        <Projects/>
      </div>
    </div>
  )
}

export default page