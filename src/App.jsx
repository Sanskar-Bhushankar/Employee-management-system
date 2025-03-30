import { useState } from 'react'
import './App.css'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'
function App() {

  const [user,setuser]=useState(null)
  const authdata = useContext(AuthContext)
  
  useEffect(() => {
    if(authdata){
      const loggedInUser = localStorage.getItem("LoggedInUser")
      if(loggedInUser){
        setuser(loggedInUser.role)
      }
    }
  }, [])
  

  const handleLogin = (email,password)=>{
    
    if (email=='admin@me.com' && password=='123'){
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authdata && authdata.employees.find((e)=>email==e.email && e.password == password)){
      setuser('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }
    else{
      alert("invalid creds")
    }
  }

  // handleLogin('user@me.com',"123")



  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user =='admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App
