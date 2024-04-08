import React from 'react'
import image from "../assets/image.webp"
import { Link } from 'react-router-dom'
const CategoryCard = () => {
  return (
    <Link to={"categories/erww"} className='w-16 h-16 bg-[#d8b6ef] p-2 flex items-center justify-center flex-col rounded-xl overflow-hidden'>
      <img className='w-12 h-12 object-cover hover:scale-110 transition-all' src={image} alt="" />
      <h2 className='text-[12px] text-gray-700 font-medium'>Airbuds</h2>
    </Link>
  )
}

export default CategoryCard