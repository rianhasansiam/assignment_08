import  { useContext } from 'react'

import EachWishL from './EachWishL'
import { DataContext } from '../App'

const Wishlists = () => {
  const contextApi=useContext(DataContext)
  const {wislist,addtocartHandle}=contextApi

  

  return (
    <div className='container mx-auto py-10'>
      <h1 className='font-bold text-3xl py-6'>WishList</h1>

      {
        wislist.map((eachwish,index)=><EachWishL key={index} eachwish={eachwish} addtocartHandle={addtocartHandle}/>)
      }
      
    </div>
  )
}



export default Wishlists