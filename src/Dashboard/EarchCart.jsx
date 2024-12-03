
import PropTypes from 'prop-types'

const EarchCart = ({eachcard}) => {
    
    const {description,price,product_image,product_title}=eachcard
  return (
    <div className='flex flex-col lg:flex-row lg:gap-10 gap-5 rounded-xl p-8 lg:p-8 items-center md:container mx-auto shadow-xl  my-10 bg-white relative w-[90%]'>
        <div className='w-[50%] lg:w-[15%] h-full'>
            <img className='h-full w-full object-cover' src={product_image} alt="" />
        </div>
        <div className=''>
            <h1 className='font-bold text-2xl'>{product_title}</h1>
            <p className='text-gray-500 py-5'>{description}</p>
            <p className='font-semibold'>Price: ${price}</p>
        </div>
            <i className="fa-regular fa-circle-xmark absolute top-[50px] right-10 lg:right-[120px] text-red-500 text-4xl cursor-pointer"></i>
    </div>
  )
}

EarchCart.propTypes = {
  eachcard:PropTypes.object
}

export default EarchCart