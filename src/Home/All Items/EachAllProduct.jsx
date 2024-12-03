import  { useContext } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../App'

const EachAllProduct = ({eachdata}) => {


 
    const {product_title,price,product_image}=eachdata

    const navigate=useNavigate()


    const giveData=useContext(DataContext)
    const{ reciveData}=giveData

    const doubleHandle=()=>{
      reciveData(eachdata)
      navigate('/details')
     
    }

  return (
    <div className='bg-white p-8 shadow-lg  w-[100%] rounded-xl '>
        <div className='w-[100%]'><img className='w-full h-[200px] rounded-xl object-contain my-5' src={product_image} alt="" /></div>
        <h1 className='font-bold text-lg'>{product_title}</h1>
        <p className='text-gray-500 pt-2 pb-4 font-semibold'>Price:{price}$</p>
        <button onClick={doubleHandle} className='btn rounded-full bg-white border-[#9538E2] text-[#9538E2]'>View Details</button>
    </div>
  )
}

EachAllProduct.propTypes = {
  eachdata:PropTypes.object
}

export default EachAllProduct