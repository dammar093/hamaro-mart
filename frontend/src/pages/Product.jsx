import React, { useRef, useState } from 'react'
import imgae from "../assets/images.jpeg"
import Button from '../components/Button'
import Input from '../components/Input'

import { FiPlus, FiMinus } from "react-icons/fi";
import Rating from '../components/Rating'
import Review from '../components/Review'
const Product = () => {

  const [quntity, setQuantity] = useState(1)
  const quanitiyRef = useRef()

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
    <section className='my-4 w-full mb-[70px]'>
      <div className='w-full flex flex-wrap'>
        <div className='w-full md:w-1/2 bg-white py-2'>
          <div className='w-full md:h-[350px] p-1 flex items-center justify-center'>
            <img className='w-[300px] h-[300px] object-scale-down'
              src={imgae}
              alt="" />
          </div>
          <div className='w-full my-2'>
            <div className='flex justify-center gap-2'>
              <div className='w-[100px] h-[100px] border shadow-sm p-1'>
                <img className='w-full h-full object-cover cursor-pointer' src={imgae} alt="" />
              </div>
              <div className='w-[100px] h-[100px] border shadow-sm p-1'>
                <img className='w-full h-full object-cover cursor-pointer' src={imgae} alt="" />
              </div>
              <div className='w-[100px] h-[100px] border shadow-sm p-1'>
                <img className='w-full h-full object-cover cursor-pointer' src={imgae} alt="" />
              </div>
              <div className='w-[100px] h-[100px] border shadow-sm p-1'>
                <img className='w-full h-full object-cover cursor-pointer' src={imgae} alt="" />
              </div>

            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 p-2 flex flex-col justify-between'>
          <div className='w-full grid grid-rows-1'>
            <h2 className='text-xl font-semibold uppercase text-[#AE56EF]'>Iphone 15</h2>
            <div className='my-2'>
              <div className='font-medium'>
                <span className='text-gray-700 capitalize'>Category: </span>
                <span className='text-[#AE56EF] capitalize '>Mobile </span>
              </div>
              <div className='font-medium'>
                <span className='text-gray-700 capitalize'>Brand: </span>
                <span className='text-[#AE56EF] capitalize '>Apple </span>
              </div>
              <div className='font-medium'>
                <span className='capitalize text-gray-600'>Stock: </span>
                <span className='capitalize text-[#AE56EF]'>Instock</span>
              </div>

              <div className='flex items-center gap-2'>
                <Rating />
                <span className='text-gray-600'>(100)</span>
              </div>
            </div>
            <div className='my-2 text-gray-600 text-justify'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eaque quaerat, nulla neque iure animi quia doloremque assumenda
                placeat harum itaque corrupti recusandae vero a minima doloribus
                eos iste ipsam adipisci dolorum omnis aliquid odit porro velit quas.
                Eos, quasi amet. Natus delectus sint sequi explicabo nisi,
                cumque quis quod laborum.</p>
            </div>
            <div className='my-2 flex gap-3 items-center'>
              <span className='text-3xl font-medium text-[#AE56EF]'>Rs.1200</span>
              <span className='text-2xl font-medium text-gray-600 line-through'>Rs.2000</span>
            </div>
          </div>
          <div className='flex gap-2'>
            <span className='text-gray-600'>Colors:</span>
            <div className='flex gap-2'>
              <div className='w-4 h-4 cursor-pointer  rounded-full bg-red-800 border-2 border-[#AE56EF]'></div>
              <div className='w-4 h-4 cursor-pointer  rounded-full bg-white'></div>
              <div className='w-4 h-4 cursor-pointer  rounded-full bg-blue-800'></div>
              <div className='w-4 h-4 cursor-pointer  rounded-full bg-pink-800'></div>
            </div>
          </div>
          <div className='flex gap-2'>
            <span className='text-gray-600'>Size:</span>
            <div className='flex gap-2 text-gray-600'>
              <div className='w-8 h-8 text-center text-xl cursor-pointer uppercase border'>XL</div>
              <div className='w-8 h-8 text-center text-xl cursor-pointer uppercase border'>XL</div>
              <div className='w-8 h-8 text-center text-xl cursor-pointer uppercase border'>XL</div>
              <div className='w-8 h-8 text-center text-xl cursor-pointer uppercase border'>XL</div>
            </div>
          </div>
          <div className='my-4 flex items-center gap-2'>
            <div className='flex gap-2'>
              <div className='w-[40px] h-[40px] border border-gray-700 flex justify-center items-center cursor-pointer' onClick={decreaseQuantity}>
                <FiMinus className='text-xl text-gray-700 font-medium' />
              </div>
              <Input
                className="w-[60px] h-[40px] outline-none px-1 text-center border border-gray-700 bg-transparent"
                type="text"
                ref={quanitiyRef}
                value={quntity}
                min={1}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <div className='w-[40px] h-[40px] border border-gray-700 flex justify-center items-center cursor-pointer' onClick={increaseQuantity}>
                <FiPlus className='text-xl text-gray-700 font-medium' />
              </div>
            </div>

            <div>
              <Button
                type="button"
                className="px-6 py-2 bg-[#AE56EF] 
                rounded-full text-white
                 hover:bg-[#793da4] transition-all uppercase"
              >
                Add To cart
              </Button>
            </div>
          </div>
        </div>
        <div className='my-8 w-full'>
          <h3 className='my-2 text-gray-600 font-medium text-xl'>Reviews <span>(10)</span></h3>
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </section>
  )
}

export default Product