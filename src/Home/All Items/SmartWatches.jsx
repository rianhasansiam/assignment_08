import  { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'
import EachAllProduct from './EachAllProduct'

const SmartWatches = () => {
  const data=useLoaderData()
  

  const [smartwatches,setSmartwatches]=useState([])


  useEffect(()=>{
    const filterdata=data.filter((eachData) => eachData.category === 'Smart Watches')
    setSmartwatches(filterdata)
  },[data])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 lg:w-[75%]  '>

      {
        smartwatches.map((eachdata,index)=><EachAllProduct key={index} eachdata={eachdata}  />)
      }

    </div>
  )
}



export default SmartWatches