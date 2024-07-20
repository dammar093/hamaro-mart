import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <section className='w-full  object-fit flex justify-center items-center'>
      <div className='w-full mt-8'>
        <h2 className='text-xl md:text-2xl font-semibold text-gray-600 uppercase text-center'>Your cart is empty</h2>
        <div className='w-full'>
          <div className='w-full flex justify-center '>
            <video className='md:w-[300px] w-full h-auto' loading="lazy" muted="muted" src="https://cdnl.iconscout.com/lottie/premium/thumb/empty-box-12088211-9861805.mp4" type="video/mp4" autoplay="autoplay" loop="loop"></video>
          </div>
          <br />
          <div className='w-full flex justify-center'>
            <Link className='text-md uppercase  text-white  bg-[#AE56EF]  rounded-full py-2 px-4 hover:bg-[#682597] transition-all delay-100' to="/products">
              continue shopping
            </Link>
          </div>
        </div>
      </div>
    </section >
  )
}

export default EmptyCart