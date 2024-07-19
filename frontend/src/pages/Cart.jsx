import React, { useEffect, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Input from '../components/Input'
import Button from '../components/Button'
import { AiOutlineClose } from "react-icons/ai";
import CheckoutPrice from '../components/CheckoutPrice';
import { useDispatch, useSelector } from "react-redux"
import { BsTypeH2 } from 'react-icons/bs';
import { removeFromCart } from '../features/cartSlice';
const Cart = () => {
  const [quntity, setQuantity] = useState(1)
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.cart);
  // console.log(cartProducts.length);
  // console.log(cartProducts);
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  const decreaseQuantity = () => {
    if (quntity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    cartProducts.length > 0 ? (
      <section className='w-full min-h-screen mb-12 md:mb-0'>
        <h1 className='text-xl font-medium text-gray-600 uppercase my-4'>Your Cart</h1>
        <div className='w-full'>
          <div className='w-full bg-white p-2 grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className=' w-full grid grid-cols-1 gap-2 h-fit'>
              {
                cartProducts.map(item => (
                  <div className='w-full p-2 grid grid-cols-1 gap-8 shadow' key={item.id}>
                    <div className='flex gap-2 w-full relative'>
                      <div className='w-[150px] h-[150px] rounded'>
                        <img className='w-full h-full object-cover rounded' src={item.image} alt={item.title} />
                      </div>
                      <div className='flex items-center'>
                        <div>
                          <h3 className='text-grey capitalize text-md md:text-lg font-semibold text-[#4B5563]'>{item.title}</h3>
                          <div className='text-[#4B5563]'>
                            <span>Rs. {item.price}</span>
                          </div>
                          <div className='flex gap-1 md:gap-2 text-[#4B5563]'>
                            <Button className='w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded focus:border-black'
                              onClick={decreaseQuantity}
                            ><FiMinus
                              /></Button>
                            <Input className="w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded text-center focus:border-black" type="text"
                              value={quntity}
                              onChange={(e) => setQuantity(Number(e.target.value))}
                              min={1} />
                            <Button className="w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded focus:border-black"
                              onClick={increaseQuantity}
                            ><FiPlus
                              /></Button>
                          </div>
                        </div>
                      </div>
                      <div className='absolute right-0 top-0'>
                        <AiOutlineClose className='text-[#4B5563] text-xl font-semibold cursor-pointer float-right'
                          onClick={() => dispatch(removeFromCart(item.id))}
                        />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='bg-[#F9FAFB] w-full p-4 h-fit'>
              <div>
                <h3 className='text-gray-600 font-semibold uppercase'>order summary</h3>
              </div>
              <CheckoutPrice title="subtotal" price={1200} style="border-b-2 border-gray-300 border-solid " />
              <CheckoutPrice title="shipping charge" price={120} style="border-b-2 border-gray-300 border-solid " />
              <CheckoutPrice title="Tax" price={12} style="border-b-2 border-gray-300 border-solid " />
              <CheckoutPrice title="order total" price={1332} style="border-none" />
              <div className='w-full'>
                <Button className="bg-[#AE56EF] uppercase w-full py-2 px-4 rounded font-semibold text-white hover:bg-[#8042ac]">Check Out</Button>
              </div>
            </div>
          </div>
        </div>
      </section >
    ) :
      (<h1>Your cart is empty</h1>)
  )
}

export default Cart