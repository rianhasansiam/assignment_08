import  { useContext } from 'react'

import { DataContext } from '../App'

import 'react-toastify/dist/ReactToastify.css';

const EachDetails = () => {

    const contexData=useContext(DataContext)
    const {load,addtocartHandle,wislishthandle}=contexData
    

    const {product_title,product_image,price,description,Specification,rating,availability}=load
  
  return (
    <div className='flex lg:flex-row flex-col gap-5 p-10  shadow-xl lg:w-[60%] w-[90%] md:w-[80%] mx-auto rounded-3xl -mt-36 bg-white items-center'>
        <div className='lg:w-[30%]'>
            <img className='rounded-xl object-cover ' src={product_image} alt="" />
        </div>

     <div>
            <h1 className='font-bold text-2xl'>{product_title}</h1>
            <p className='font-semibold font-lg py-2'>Price: ${price}</p>
            <p className='border-[#309C08] border-[1px] bg-[#2f9c081e] text-[#309C08] rounded-full w-[110px]  text-center'>{availability?"In Stock":"Stock Out"}</p>
            <p className='text-gray-400 py-4'>{description}</p>

            <h3 className='font-bold text-lg'>Specification:</h3>
            <ul className='text-gray-500'>
                <li>1. {Specification[0]}</li>
                <li>2. {Specification[1]}</li>
                <li>3. {Specification[2]}</li>
                <li>4. {Specification[3]}</li>
            </ul>

            <h4 className='font-bold py-3'>Rating:<i className="fa-solid fa-star text-orange-400"></i></h4>


<div className='flex gap-3 items-center'>

    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </div>
<span className=' bg-gray-300 px-3 py-[1px] rounded-full block text-sm'>{rating}</span>
</div>

            <div className='py-8 '>

                <button onClick={()=>addtocartHandle(load)} className='btn bg-[#9538E2] rounded-full text-white '>Add To Card <i className="fa-solid fa-cart-shopping"></i></button>
                <button onClick={()=>wislishthandle(load)} className='hover:bg-gray-100 ml-5 border-2 rounded-full px-3 py-3 text-xl '><i className="fa-regular fa-heart flex items-center justify-center"></i></button>
            </div>
            
        </div> 
    </div>

 
  )
}



export default EachDetails