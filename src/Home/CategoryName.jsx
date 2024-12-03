
import { NavLink } from 'react-router-dom'

const CategoryName = () => {
  return (
    <div className='flex lg:flex-col flex-wrap gap-3 bg-white p-6 rounded-2xl '>
         <NavLink className={({isActive}) => isActive ? "p-2 px-5  text-lg rounded-full bg-[#9538E2] font-semibold text-white" : "bg-gray-200 p-2 px-5  text-lg rounded-full text-gray-600"} to="/">All Product</NavLink>
        <NavLink className={({isActive}) => isActive ? "p-2 px-5  text-lg rounded-full bg-[#9538E2] font-semibold text-white" : "bg-gray-200 p-2 px-5  text-lg rounded-full text-gray-600"} to="/laptops">Laptops</NavLink>
         <NavLink className={({isActive}) => isActive ? "p-2 px-5  text-lg rounded-full bg-[#9538E2] font-semibold text-white" : "bg-gray-200 p-2 px-5  text-lg rounded-full text-gray-600"} to="/phones">Phones</NavLink>
        <NavLink className={({isActive}) => isActive ? "p-2 px-5  text-lg rounded-full bg-[#9538E2] font-semibold text-white" : "bg-gray-200 p-2 px-5  text-lg rounded-full text-gray-600"} to="/smartwatches">Smart Watches</NavLink>
        <NavLink className={({isActive}) => isActive ? "p-2 px-5  text-lg rounded-full bg-[#9538E2] font-semibold text-white" : "bg-gray-200 p-2 px-5  text-lg rounded-full text-gray-600"} to="/chargers">Chargers</NavLink>
       <NavLink className={({isActive}) => isActive ? "p-2 px-5  text-lg rounded-full bg-[#9538E2] font-semibold text-white" : "bg-gray-200 p-2 px-5  text-lg rounded-full text-gray-600"} to="/powerbank">Power Banks</NavLink>
       <NavLink className={({isActive}) => isActive ? "p-2 px-5  text-lg rounded-full bg-[#9538E2] font-semibold text-white" : "bg-gray-200 p-2 px-5  text-lg rounded-full text-gray-600"} to="/iphones">Iphones</NavLink>
        
    </div>
  )
}



export default CategoryName