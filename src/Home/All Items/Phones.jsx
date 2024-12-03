import  { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'
import EachAllProduct from './EachAllProduct'

const Phones = () => {
  const data=useLoaderData()
  

  const [phones,setPhones]=useState([])


  useEffect(()=>{
    const filterdata=data.filter((eachData) => eachData.category === 'Phones')
    setPhones(filterdata)
  },[data])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 lg:w-[75%]  '>

      {
        phones.map((eachdata,index)=><EachAllProduct key={index} eachdata={eachdata}  />)
      }

    </div>
  )
}



export default Phones