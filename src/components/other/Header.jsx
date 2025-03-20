import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between text-xl text-white'>
        <h1 className='text-2xl'>Hello <br/> <span className='text-3xl'>Sanskar 👋 </span></h1>
        <button className='bg-red-500 text-white rounded p-2'>Logout</button>
    </div>
  )
}

export default Header