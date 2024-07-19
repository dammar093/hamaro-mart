import React from 'react'

const CheckoutPrice = ({ title, price, style }) => {
  return (
    <div className={`mt-2 text-lg text-[#4B5563] py-4 ${style}`}>
      <div className='w-full flex justify-between'>
        <div className=' capitalize'>{title}</div> <div> Rs. {price}</div>
      </div>
    </div>
  )
}

export default CheckoutPrice