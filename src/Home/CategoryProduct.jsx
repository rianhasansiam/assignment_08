
import CategoryName from './CategoryName'
import { Outlet } from 'react-router-dom'

const CategoryProduct = () => {
  return (
    <div className='flex flex-col lg:flex-row container mx-auto justify-around py-10 gap-5'>
      <div>
        <CategoryName/>
      </div>
        <Outlet/>
    </div>
  )
}



export default CategoryProduct