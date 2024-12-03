import  { useEffect, useState } from 'react'

import EachAllProduct from './EachAllProduct'
import { useLoaderData } from 'react-router-dom'

const Chargers = () => {
  const data=useLoaderData()
  

  const [chargers,setChargers]=useState([])

  useEffect(()=>{
    const filterdata=data.filter((eachData) => eachData.category === 'Chargers')
    setChargers(filterdata)
  },[data])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 lg:w-[75%]  '>

    {
      chargers.map((eachdata,index)=><EachAllProduct key={index} eachdata={eachdata}  />)
    }

  </div>
  )
}


export default Chargers