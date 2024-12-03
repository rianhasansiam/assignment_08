

import banner from '../assets/banner.jpg'
import { useNavigate } from 'react-router-dom'

const HeaderSection = () => {

  const navigate=useNavigate()
  return (
    <div className='container mx-auto '>


    <div className='bg-[#9538E2] rounded-2xl  pt-36 pb-60 -mt-20'>
        <h1 className='font-bold text-xl md:text-2xl lg:text-5xl text-center text-white w-[90%] lg:w-[70%] mx-auto pb-10'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className='text-center text-white w-[90%] lg:w-[50%] mx-auto pb-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <button onClick={()=>navigate('/dashboard')} className='btn rounded-full p-3 px-5 text-[#9538E2] font-semibold block mx-auto'>Shop Now</button>
    </div>

    <div className='w-[90%] md:w-[80%] lg:w-[55%] h-[450px] rounded-2xl border-2 p-4 bg-[#ffffff3a] -mt-44 mx-auto'>

        <img className='object-cover h-full w-full rounded-2xl' src={banner} alt="" />

    </div>
    
    
    
    </div>
  )
}



export default HeaderSection