import React from 'react'

export const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className=' rounded-2xl py-6 px-9 w-[45%] bg-red-400 text-white'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className=' rounded-2xl py-6 px-9 w-[45%] bg-blue-400 text-white'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className=' rounded-2xl py-6 px-9 w-[45%] bg-green-400 text-white'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className=' rounded-2xl py-6 px-9 w-[45%] bg-yellow-400 text-white'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}
