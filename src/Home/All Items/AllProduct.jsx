

import { useLoaderData } from 'react-router-dom'
import EachAllProduct from './EachAllProduct'

const AllProduct = () => {
  const data=useLoaderData()


  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 lg:w-[75%]  '>

      {
        data.slice(0, 9).map((eachdata,index)=><EachAllProduct key={index} eachdata={eachdata} />)
      }

    </div>
  )
}



export default AllProduct