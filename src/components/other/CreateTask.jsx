import React from 'react'

function CreateTask() {
  return (
    <div className='flex bg-gray-800 p-6 w-full h-auto my-10 rounded-lg shadow-lg'>
      <div id="div1" className='w-1/2 flex items-start pr-4'>
        <form className='w-full flex flex-col items-start gap-6'>
          <div className='flex flex-col gap-2 w-full'>
            <label className='text-sm text-white'>Task Title</label>
            <input className="border border-gray-600 bg-gray-700 text-white rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter task title" />
          </div> 

          <div className='flex flex-col gap-2 w-full'>
            <label className='text-sm text-white'>Date</label>
            <input className='border border-gray-600 bg-gray-700 text-white rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' type="date" />
          </div> 

          <div className='flex flex-col gap-2 w-full'>
            <label className='text-sm text-white'>Assign to</label>
            <input className="border border-gray-600 bg-gray-700 text-white rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter Employee Name" />
          </div> 

          <div className='flex flex-col gap-2 w-full'>
            <label className='text-sm text-white'>Category</label>
            <input className="border border-gray-600 bg-gray-700 text-white rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Design, Dev, etc" />
          </div> 
        </form>
      </div>

      <div id="div2" className='w-1/2 pl-4'>
        <form className='w-full flex flex-col items-start gap-6'>
          <div className='flex flex-col gap-2 w-full'>
            <label className='text-sm text-white'>Description</label>
            <textarea 
              className='border border-gray-600 bg-gray-700 text-white rounded-lg w-full h-40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' 
              placeholder="Enter task description"
            ></textarea>
          </div>

          <button className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition-all duration-150 hover:scale-105">
            Create Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask