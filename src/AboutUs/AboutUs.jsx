


const AboutUs = () => {
  return (
    <section className='w-[93vw] md:container mx-auto py-10'>
        <h1 className='font-extrabold text-3xl text-white w-[280px] h-[280px] bg-[#9538E2] rounded-full flex items-center justify-center mx-auto'>Gadget Heaven</h1>
        <p className='text-lg text-center py-8 md:w-[84%] mx-auto text-gray-600'>Gadget Heaven online gadgets & accessories store for the latest & branded Laptops,Phones,Chargers,Power Banks, watches & other types of products at best price in Bangladesh. We delivery all over the Bangladesh & accept more than 15 payment service available in Bangladesh.</p>


        <div className='flex flex-col lg:flex-row justify-between gap-5 mt-10'>
            <div>
                <h1 className='font-bold text-3xl md:text-4xl py-4'>WHAT WE REALLY DO?</h1>
                <p className='text-lg text-gray-600 '>We provide the wide range of products from the different source and delivery to you whenever you want. Moreover, we’re here for further information to customers.</p>
            </div>
            <div>
                <h1 className='font-bold text-3xl md:text-4xl py-4'>OUR VISION</h1>
                <p className='text-lg text-gray-600'>Our ultimate target is to satisfy you and rest other people in Bangladesh. Honesty, good quality, reasonable price as well as fast delivery these all things are our vision.</p>
            </div>
            <div>
                <h1 className='font-bold text-3xl md:text-4xl py-4'>HISTORY OF BEGINNING</h1>
                <p className='text-lg text-gray-600'>We made it possible in the early 2024. We’re happy to say that Gadget Heaven is one of the trusted online shopping services in Bangladesh, specifically for gadgets & accessories.</p>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between gap-10 py-10'>
            <div >
                <h1 className='font-bold text-3xl md:text-4xl py-4'>ORDER PROCESS</h1>
                <p className='text-lg text-gray-600'>You can order all the available products in our website. We also provide the facility to order via call or email even in social media. It takes almost 24/48 hours to process your order.</p>
            </div>
            <div>
                <h1 className='font-bold text-3xl md:text-4xl py-4'>PAYMENT METHOD</h1>
                <p className='text-lg text-gray-600'>We have more than 15 payment gateways through secure server of the SSL COMMERZ. Your payment will be made through your bank server which make sure that your payment is secure. We provide Debit/Credit Cards, Mobile Banking, Internet Banking as well as E-wallet payment method.</p>
            </div>

        </div>

            <img className='mx-auto my-5' src="https://i.ibb.co.com/4ND02jj/delivery-system-300x251.webp" alt="" />

            <div className='flex flex-col lg:flex-row justify-between gap-10 py-10'>
            <div >
                <h1 className='font-bold text-4xl py-4'>DELIVERY SYSTEM</h1>
                <p className='text-lg text-gray-600'>We delivery all most all location in Bangladesh through our delivery system or courier services. We also provide home delivery or door to door delivery. You can also pay the price of the product after receiving your order. In most of location, we provide the facilely to check the product before pay the bill.</p>
            </div>
            <div>
                <h1 className='font-bold text-3xl md:text-4xl py-4'>DELIVERY TIME</h1>
                <p className='text-lg text-gray-600'>Generally, we send the order as soon we get your order. According to our rules it takes nearly 3-5 working days to arrive inside Dhaka. Rest all other areas of outside Dhaka, it takes 5-7 days to arrive in your location. <br />
                We provide the facility to receive customer order at their suitable time. Delivery man always call before coming to your location that we can receive your order.</p>
            </div>

        </div>

        <div>
        <div className="divider lg:divider-vertical font-bold text-4xl py-4">CONTACT US </div>

        <ul className='text-xl text-gray-600 flex flex-col gap-3 py-5'>
            <li><i className="fa-solid fa-house text-black font-extrabold"></i> AhmedNagar,Paikpara,Mirpur-1,Dhaka</li>
            <li><i className="fa-solid fa-phone text-black font-extrabold"></i> +8801932600504</li>
            <li><i className="fa-brands fa-whatsapp text-black font-extrabold"></i> +8801932600504</li>
            <li><i className="fa-solid fa-envelope text-black font-extrabold"></i> rianhasan1971@gmail.com</li>
        </ul>
            
        </div>
    </section>
  )
}



export default AboutUs