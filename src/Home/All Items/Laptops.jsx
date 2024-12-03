import  { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'
import EachAllProduct from './EachAllProduct'

const Laptops = () => {
  const data=useLoaderData()
  

  const [laptops,setLaptops]=useState([])

  useEffect(()=>{
    const filterdata=data.filter((eachData) => eachData.category === 'Laptops')
    setLaptops(filterdata)
  },[data])


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 lg:w-[75%]  '>

      {
        laptops.map((eachdata,index)=><EachAllProduct key={index} eachdata={eachdata}  />)
      }

    </div>
  )
}



export default Laptops