import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Card = ({ item }) => {
  return (
    <Link to={`/product/id=${item.id}`} className='min-w-[170px] ms:min-w-[200px] max-w-[220px] h-[300px] bg-white shadow hover:shadow-2xl rounded flex justify-center p-1 flex-col'>
      <div className='full h-full overflow-hidden mx-auto'>
        <img className='w-full h-full object-cover rounded-md' src={item.images[0]} alt="" />
      </div>
      <div className='w-full p-1 text-[14px] font-medium'>
        <h2 className='whitespace-nowrap text-ellipsis overflow-hidden capitalize text-gray-700 text-[16px]'>{item.title}</h2>
        <p className='text-sm text-gray-600 whitespace-nowrap text-ellipsis overflow-hidden'>{item.desc}</p>
        <div className='flex items-center gap-1 text-[12px]'>
          <Rating />
          <span className=' text-gray-600'>(100)</span>
        </div>
        <div className='flex gap-2 items-center'>
          <span className='text-gray-700 font-medium text-[14px]'>Rs.{Math.round(item.price - (item.discount * item.price / 100))}</span>
          <span className='text-gray-600 line-through text-[12px] '>Rs.{item.price}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card