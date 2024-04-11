import React, { useState } from 'react'
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import Rating from './Rating';
import { BiSolidCheckShield } from "react-icons/bi";

const Review = () => {
  const [like, setLike] = useState(0)
  const [likeBtn, setLikeBtn] = useState(false)
  const increaseLike = () => {
    setLike((prev) => prev + 1)
    setLikeBtn(prev => !prev)
  }
  const decreaseLike = () => {

    setLikeBtn(prev => !prev)
    setLike((prev) => prev - 1)

  }
  return (
    <section className='bg-white w-full shadow-sm p-2 my-2'>
      <div className='w-full flex justify-between items-center'>
        <div>
          <div>
            <div>
              <div className='flex gap-2 items-center'>
                <h2 className='text-gray text-md font-medium capitalize'>Dyams</h2>
                <span className='text-sm text-gray-600'>1h ago</span>
              </div>
              <div>
                <Rating />
                <p className='text-md text-gray-500'>Lovesfsdfmsdfnsdkfjlskdflsdfksdl;fksd;l it</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex items-center gap-1'>
          {
            likeBtn ?
              <AiFillLike className='text-xl text-blue-600 cursor-pointer' onClick={decreaseLike} />
              :
              <AiOutlineLike className='text-xl text-gray-600 cursor-pointer' onClick={increaseLike} />
          }
          <span> {like !== 0 ? like : ""}</span>
        </div>
      </div>
      <div className='w-full'>
        <div className='flex gap-2'>
          <div className='flex items-center'>
            <span className='uppercase text-[#AE56EF] font-medium'>Hamro Mart</span>
            <BiSolidCheckShield className='text-blue-800' />
          </div>
          <p className='text-md text-gray-600 '>Thank you</p>
        </div>
      </div>
    </section>
  )
}

export default Review