
import { useLoaderData } from 'react-router-dom';


import Graph from './Graph';

const StatisticsPage = () => {

  const data= useLoaderData()
  return (
    <div className='bg-gray-100 py-10 '>

      <h1 className='font-bold text-3xl py-5  w-[65%] mx-auto'>Statistics</h1>
    
    <div className='bg-white md:w-[80%] w-[90%] lg:w-[65%] mx-auto rounded-3xl'>
      <Graph data={data}/>
    
    
    </div>
    </div>
  )
}

export default StatisticsPage



