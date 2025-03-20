import React from 'react'
import { useState } from 'react'

function Login() {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("form submitted")
    console.log("email is",email)
    console.log("pass is",password)

    setemail('')
    setpassword('')
   }

  return (
    <>
    <div className="flex h-screen w-screen items-center justify-center">
      <div className='border-2 rounded-2xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'> 
          <input 
          value={email}
          onChange={(e)=>{
            setemail(e.target.value)
          }}
          required 
          className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5  rounded-full' type="email" placeholder='enter your email'></input>
          
          
          <input 
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
          required 
          className='text-black outline-none bg-transparent mt-4 border-2 border-emerald-600 text-xl py-3 px-5  rounded-full' type='password' placeholder='enter password'></input>
          <button className='text-white outline-none bg-emerald-300 mt-7  border-emerald-600 text-xl py-3 px-27  rounded-full'> Log in</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login