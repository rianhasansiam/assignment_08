


const Footer = () => {
  return (

    <div className="bg-white">
    
    <div className='container mx-auto'>
    <div className='pt-20 pb-10'>
        <h1 className='text-4xl text-center font-extrabold py-5'>Gadget Heaven</h1>
        <p className='text-center text-gray-500'>Leading the way in cutting-edge technology and innovatin</p>
    </div>
    <hr/>
    </div>


    

    <footer className="footer bg-white  p-10 container mx-auto justify-around">

    <nav className=' items-center  flex flex-col'>
      <h6 className="footer-title ">Services</h6>
      <p className="link link-hover text-gray-500">Product Support</p>
      <p className="link link-hover text-gray-500">Order Tracking</p>
      <p className="link link-hover text-gray-500">Shipping & Delivery</p>
      <p className="link link-hover text-gray-500">Returns</p>
    </nav>
    <nav className=' items-center  flex flex-col'>
      <h6 className="footer-title">Company</h6>
      <p className="link link-hover text-gray-500">About us</p>
      <p className="link link-hover text-gray-500">Careers</p>
      <p className="link link-hover text-gray-500">Contact</p>
    
    </nav>
    <nav className=' items-center  flex flex-col'>
      <h6 className="footer-title">Legal</h6>
      <p className="link link-hover text-gray-500">Terms of Service</p>
      <p className="link link-hover text-gray-500">Privacy policy</p>
      <p className="link link-hover text-gray-500">Cookie policy</p>
    </nav>

  </footer>
  
    </div>

  )
}



export default Footer