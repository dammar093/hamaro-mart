import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Input from '../components/Input'
import Button from '../components/Button'
import { AiOutlineClose } from "react-icons/ai";


const Cart = () => {
  const [quntity, setQuantity] = useState(1)
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  const decreaseQuantity = () => {
    if (quntity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <section className='w-full min-h-screen mb-12 md:mb-0'>
      <h1 className='text-xl font-medium text-gray-600 uppercase my-4'>Your Cart</h1>
      <div className='w-full'>
        <div className='w-full bg-white p-2 grid grid-cols-1 md:grid-cols-2 gap-2 '>
          <div className=' w-full grid grid-cols-1 gap-2 h-fit'>
            <div className='w-full p-2 grid grid-cols-1 gap-8 shadow'>
              <div className='flex gap-2 w-full relative'>
                <div className='w-[150px] h-[150px] rounded'>
                  <img className='w-full h-full object-cover rounded' src="http://localhost:5173/src/assets/images.jpeg" alt="" />
                </div>
                <div className='flex items-center'>
                  <div>
                    <h3 className='text-grey capitalize text-md md:text-lg font-semibold text-[#4B5563]'>iphone15 promax</h3>
                    <div className='text-[#4B5563]'>
                      <span>Rs. 120000</span>
                    </div>
                    <div className='flex gap-1 md:gap-2 text-[#4B5563]'>
                      <Button className='w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded focus:border-black' ><FiMinus
                        onClick={decreaseQuantity}
                      /></Button>
                      <Input className="w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded text-center focus:border-black" type="text"
                        value={quntity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min={1} />
                      <Button className="w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded focus:border-black"
                      ><FiPlus
                          onClick={increaseQuantity}
                        /></Button>
                    </div>
                  </div>
                </div>
                <div className='absolute right-0 top-0'>
                  <AiOutlineClose className='text-[#4B5563] text-xl font-semibold cursor-pointer float-right' />
                </div>
              </div>
            </div>
            <div className='w-full p-2 grid grid-cols-1 gap-8 shadow'>
              <div className='flex gap-2 w-full relative'>
                <div className='w-[150px] h-[150px] rounded'>
                  <img className='w-full h-full object-cover rounded' src="http://localhost:5173/src/assets/images.jpeg" alt="" />
                </div>
                <div className='flex items-center'>
                  <div>
                    <h3 className='text-grey capitalize text-md md:text-lg font-semibold text-[#4B5563]'>iphone15 promax</h3>
                    <div className='text-[#4B5563]'>
                      <span>Rs. 120000</span>
                    </div>
                    <div className='flex gap-1 md:gap-2 text-[#4B5563]'>
                      <Button className='w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded focus:border-black' ><FiMinus
                        onClick={decreaseQuantity}
                      /></Button>
                      <Input className="w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded text-center focus:border-black" type="text"
                        value={quntity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min={1} />
                      <Button className="w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded focus:border-black"
                      ><FiPlus
                          onClick={increaseQuantity}
                        /></Button>
                    </div>
                  </div>
                </div>
                <div className='absolute right-0 top-0'>
                  <AiOutlineClose className='text-[#4B5563] text-xl font-semibold cursor-pointer float-right' />
                </div>
              </div>
            </div>
            <div className='w-full p-2 grid grid-cols-1 gap-8 shadow'>
              <div className='flex gap-2 w-full relative'>
                <div className='w-[150px] h-[150px] rounded'>
                  <img className='w-full h-full object-cover rounded' src="http://localhost:5173/src/assets/images.jpeg" alt="" />
                </div>
                <div className='flex items-center'>
                  <div>
                    <h3 className='text-grey capitalize text-md md:text-lg font-semibold text-[#4B5563]'>iphone15 promax</h3>
                    <div className='text-[#4B5563]'>
                      <span>Rs. 120000</span>
                    </div>
                    <div className='flex gap-1 md:gap-2 text-[#4B5563]'>
                      <Button className='w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded focus:border-black' ><FiMinus
                        onClick={decreaseQuantity}
                      /></Button>
                      <Input className="w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded text-center focus:border-black" type="text"
                        value={quntity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min={1} />
                      <Button className="w-[40px] py-1 px-2 outline-none border-[#4B5563] border-2 border-solid rounded focus:border-black"
                      ><FiPlus
                          onClick={increaseQuantity}
                        /></Button>
                    </div>
                  </div>
                </div>
                <div className='absolute right-0 top-0'>
                  <AiOutlineClose className='text-[#4B5563] text-xl font-semibold cursor-pointer float-right' />
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#F9FAFB] w-full p-4 h-fit'>
            <div>
              <h3 className='text-gray-600 font-semibold uppercase'>order summary</h3>
            </div>
            <div className='mt-2 text-lg text-[#4B5563] py-4 border-b-2 border-gray-300 border-solid'>
              <div className='w-full flex justify-between'>
                <div className=' capitalize'>subtotal</div> <div> Rs.3234</div>
              </div>
            </div>
            <div className='mt-2 text-lg text-[#4B5563] py-2 border-b-2 border-gray-300 border-solid'>
              <div className='w-full flex justify-between '>
                <div className=' capitalize'>Shipping Charge</div> <div> Rs.32</div>
              </div>
            </div>
            <div className=' mt-2 text-lg text-[#4B5563] py-2 border-b-2 border-gray-300 border-solid'>
              <div className='w-full flex justify-between'>
                <div className=' capitalize'>Tax</div> <div> Rs.32</div>
              </div>
            </div>
            <div className='w-full flex justify-between mt-2 text-lg text-gray-600 font-semibold py-2'>
              <div className=' capitalize'>Order Total</div> <div> Rs.3234</div>
            </div>
            <div className='w-full'>
              <Button className="bg-[#AE56EF] uppercase w-full py-2 px-4 rounded font-semibold text-gray-800 hover:bg-[#8042ac]">Check Out</Button>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Cart