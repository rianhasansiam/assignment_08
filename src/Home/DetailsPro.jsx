import { useContext } from 'react'

import { DataContext } from '../App'
import EachDetails from './EachDetails'


const DetailsPro = () => {
    const contexData=useContext(DataContext)
    const {load}=contexData
    
 
    
  return (
    <>
    <div className='bg-[#9538E2] h-[300px]'>
        <h1 className='text-center font-bold lg:text-3xl md:text-2xl text-xl py-6 text-white'>Product Details</h1>
        <p className='text-center lg:w-[50%] w-[90%] mx-auto text-white '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        
    </div>


       
    {load.length == 0 ?  <h1 className='font-bold text-center text-xl md:text-3xl lg:text-5xl lg:w-[60%] w-[90vw] md:w-[85vw] mx-auto py-24'>No Data Available.Please go to Home menu and try again......</h1> : <EachDetails />}
     
    
    
      
    </>
  )
}

DetailsPro.propTypes = {}

export default DetailsPro