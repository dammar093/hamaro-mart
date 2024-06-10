import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Input from '../components/Input'

const Cart = () => {
  const [quntity, setQuantity] = useState(1)
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  const decreaseQuantity = () => {
    if (quntity > 1) {
      setQuantity((prev) => prev - 1)
      s
    }
  }

  return (
    <section className='w-full min-h-screen'>
      <h1 className='text-xl font-medium tect-gray-600 uppercase my-4'>Your Cart</h1>
      <div className='w-full'>
        <div className='w-full bg-white p-2 grid grid-cols-3 gap-2'>
        </div>
      </div>
    </section>
  )
}

export default Cart