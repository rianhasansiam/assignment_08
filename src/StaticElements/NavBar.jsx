

import { useContext} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { DataContext } from '../App'

const NavBar = () => {


    const location=useLocation()

    const contextApi=useContext(DataContext)
    const {cartAmount,wislist,checkHandle}=contextApi
 
    


    
  return (
    <div className={`navbar bg-base-100 container mx-auto pt-10 px-5 relative z-10 bg-transparent ${location.pathname==='/'?"text-white":"text-black"}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
        <li className='font-semibold'><NavLink  to="/">Home</NavLink></li>
        <li className='font-semibold'><NavLink  to="/statistics">Statistics</NavLink></li>
        <li className='font-semibold'><NavLink  to="/dashboard">Dashboard</NavLink></li>
        <li className='font-semibold'><NavLink  to="/aboutus">About Us</NavLink></li>
        
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-extrabold">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className='font-semibold'><NavLink  to="/">Home</NavLink></li>
        <li className='font-semibold'><NavLink  to="/statistics">Statistics</NavLink></li>
        <li className='font-semibold'><NavLink  to="/dashboard">Dashboard</NavLink></li>
        <li className='font-semibold'><NavLink  to="/aboutus">About Us</NavLink></li>
    </ul>
  </div>

 


  <div className="navbar-end gap-5 text-xl text-black">
  <div className="indicator">
  <span className="indicator-item badge badge-secondary bg-[#9538E2] border-[#9538E2]">{cartAmount.length}</span>
  <Link onClick={()=>checkHandle(true)} to="/dashboard"><i className="fa-solid fa-cart-shopping bg-white rounded-full h-12 flex items-center justify-center w-12 border-2 p-2 hover:bg-gray-100 cursor-pointer"></i></Link>
</div>
  

<div className="indicator">
  <span className="indicator-item badge badge-secondary bg-[#9538E2] border-[#9538E2]">{wislist.length}</span>
  <Link onClick={()=>checkHandle(false)} to="/dashboard/wishlist"><i className="fa-regular fa-heart bg-white rounded-full h-12 flex items-center justify-center w-12 border-2 p-2 hover:bg-gray-100 cursor-pointer"></i></Link>
</div>
  
    
  </div>





</div>
  )
}



export default NavBar