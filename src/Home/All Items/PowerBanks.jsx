import  { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'
import EachAllProduct from './EachAllProduct'

const PowerBanks = () => {
  const data=useLoaderData()
  

  const [powerBank,setPowerBank]=useState([])


  useEffect(()=>{
    const filterdata=data.filter((eachData) => eachData.category === 'Power Banks')
    setPowerBank(filterdata)
  },[data])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 lg:w-[75%]  '>

      {
        powerBank.map((eachdata,index)=><EachAllProduct key={index} eachdata={eachdata}  />)
      }

    </div>
  )
}



export default PowerBanks