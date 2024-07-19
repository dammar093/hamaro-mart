import React, { useRef, useState } from 'react'
import imgae from "../assets/images.jpeg"
import Button from '../components/Button'
import Input from '../components/Input'
import Products from '../components/Products'
import { FiPlus, FiMinus } from "react-icons/fi";
import Rating from '../components/Rating'
import Review from '../components/Review'
import { useParams } from 'react-router-dom'
import data from '../data/data'
const Product = () => {

  const [quntity, setQuantity] = useState(1)
  const [index, setIndex] = useState(0)
  const quanitiyRef = useRef()

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  const decreaseQuantity = () => {
    if (quntity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }
  const handleImage = (index) => {

  }
  const { id } = useParams()
  const productId = Number(id.split("=")[1])
  // console.log(productId)
  const product = data.find(item => item.id === productId)
  console.log(product);
  return (
    <section className='my-4 w-full mb-[70px]'>
      <div className='w-full flex flex-wrap'>
        <div className='w-full md:w-1/2 bg-white py-2'>
          <div className='w-full md:h-[350px] p-1 flex items-center justify-center'>
            <img className='w-[300px] h-[300px] object-scale-down'
              src={product.images[index]}
              alt="" />
          </div>
          <div className='w-full my-2'>
            <div className='flex justify-center gap-2'>
              {
                product.images.map((img, index) => (
                  <div className='w-[100px] h-[100px] border shadow-sm p-1' key={img}
                    onClick={() => setIndex(index)}
                  >
                    <img className='w-full h-full object-cover cursor-pointer' src={img} alt="" />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 p-2 flex flex-col justify-between'>
          <div className='w-full grid grid-rows-1'>
            <h2 className='text-xl font-semibold uppercase text-[#AE56EF]'>{product.title}</h2>
            <div className='my-2'>
              <div className='font-medium'>
                <span className='text-gray-700 capitalize'>Category: </span>
                <span className='text-[#AE56EF] capitalize '>{product.category} </span>
              </div>
              <div className='font-medium'>
                <span className='text-gray-700 capitalize'>Brand: </span>
                <span className='text-[#AE56EF] capitalize '>{product.brand} </span>
              </div>
              <div className='font-medium'>
                <span className='capitalize text-gray-600'>Stock: </span>
                <span className='capitalize text-[#AE56EF]'>{product.quantity > 0 ? "Instock" : "Out of stock"}</span>
              </div>

              <div className='flex items-center gap-2'>
                <Rating />
                <span className='text-gray-600'>(100)</span>
              </div>
            </div>
            <div className='my-2 text-gray-600 text-justify'>
              <p>{product.desc}</p>
            </div>
            <div className='my-2 flex gap-3 items-center'>
              <span className='text-3xl font-medium text-[#AE56EF]'>Rs.{Math.round(product.price - (product.discount * product.price / 100))}</span>
              <span className='text-2xl font-medium text-gray-600 line-through'>Rs.{product.price}</span>
            </div>
          </div>
          {
            product.colors && <div className='flex gap-2'>
              <span className='text-gray-600'>Colors:</span>
              <div className='flex gap-2'>
                {
                  product.colors.map(color => (
                    <div key={color} style={{ background: `${color}` }} className={`w-4 h-4 cursor-pointer  rounded-full  border-2 border-[#AE56EF]`}></div>
                  ))
                }

              </div>
            </div>
          }

          {
            product.sizes && <div className='flex gap-2'>
              <span className='text-gray-600'>Size:</span>
              <div className='flex gap-2 text-gray-600'>
                {
                  product.sizes.map(size => (
                    <div key={size} className='w-8 h-8 text-center text-xl cursor-pointer uppercase border'>{size}</div>

                  ))
                }
              </div>
            </div>
          }
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
      <div className='my-8'>
        <Products title="Related Products" />
      </div>
    </section>
  )
}

export default Product