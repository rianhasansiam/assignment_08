

import { useContext,  } from 'react'
import { Link, Outlet, useLocation, } from 'react-router-dom'
import { DataContext } from '../App'

const Dashboard = () => {


  

  const contexApi= useContext(DataContext)

  const {checkHandle}=contexApi
  const location=useLocation()


  return (
    <div className='bg-gray-100'>
    <div className='bg-[#9538E2] h-[250px]'>
        <h1 className='text-center font-bold lg:text-4xl md:text-2xl text-xl py-6 text-white'>DashBoard</h1>
        <p className='text-center lg:w-[50%] md:w-[80%] w-[90%] mx-auto text-white '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        
        <div className='text-center py-5 gap-5 flex justify-center  '>
        
        <Link onClick={()=>checkHandle(true)} className={`block ${location.pathname==='/dashboard'?"p-2 px-5  text-lg rounded-full bg-white font-semibold ":" p-2 px-5  text-lg rounded-full border"}`}  to="/dashboard">Cart</Link>
        <Link onClick={()=>checkHandle(false)} className={`block ${location.pathname==='/dashboard/wishlist'?"p-2 px-5  text-lg rounded-full bg-white font-semibold":" p-2 px-5  text-lg rounded-full border"}`}  to="/dashboard/wishlist">Wish List</Link>


        </div>
    </div>

    <Outlet/>
    
    </div>
  )
}



export default Dashboard