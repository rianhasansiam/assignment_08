import  { useContext, useState } from 'react'

import { DataContext } from '../App'
import EarchCart from './EarchCart'
import { Link } from 'react-router-dom'
import greentick from '../assets/Group.png'

const Carts = () => {
  const contextApi=useContext(DataContext)
    const {total,cartAmount,cartamountemty,balanceemty}=contextApi
// const [cost,setCost]=useState(total)

    const [newArray,setNewArray]=useState(cartAmount)


const sortProducts = () => {
  const sortedProducts = [...newArray].sort((a, b) => b.price - a.price);
  setNewArray(sortedProducts);
};
       

const purchaseHandle=()=>{
  setNewArray([])
  


 
}


  const doubleHandlee=()=>{
    purchaseHandle()
    document.getElementById('my_modal_5').showModal()
    cartamountemty()
   
  }  

 
  return (
    <div className='py-10 '>
      <div className='flex flex-col gap-y-5 lg:flex-row justify-around items-center py-10'>
        <h1 className='font-bold text-2xl'>Cart</h1>
        <div className='flex flex-wrap gap-5 justify-center items-center'>
          <h1 className='font-bold text-2xl'>Total Cost:${total.toFixed(2)}</h1>
          <button onClick={sortProducts}  className='block border border-[#9538E2] text-[#9538E2] hover:bg-[#d3c4e0] rounded-full px-3 py-2 font-semibold'>Sort by Price  <i className="fa-solid fa-arrow-down-wide-short"></i></button>
          <button disabled={total === 0} onClick={doubleHandlee} className='block bg-[#9538E2] rounded-full px-3 py-2 font-semibold'>Purchase</button>
        </div>
      </div>



      {
           newArray.map((eachcard,index)=><EarchCart eachcard={eachcard} key={index}  />)
      }




<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle max-sm:w-[90vw] max-sm:mx-auto">
  <div className="modal-box text-center p-10 flex flex-col items-center">

  <img src={greentick} alt="" />
    <h3 className="font-bold text-lg lg:text-3xl py-5">Payment Successfully</h3>
    <div className="divider my-0"></div>
    <p className="py-2 lg:text-xl">Thanks for purchasing</p>
    <p className='font-semibold text-lg'>Total:${total.toFixed(2)}</p>


    <div className="modal-action w-full ">
      <form method="dialog ">

        <Link onClick={balanceemty} to="/" className="btn max-sm:px-[calc(100vw-400px)] px-48 text-lg">Close</Link>
      </form>
    </div>
  </div>
</dialog>


    </div>
  )
}



export default Carts