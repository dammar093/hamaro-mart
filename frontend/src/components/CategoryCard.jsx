import React from 'react'
import image from "../assets/image.webp"
import { Link } from 'react-router-dom'
const CategoryCard = () => {
  return (
    <Link to={"category/jkakjakljl"} className='w-16 h-[70px] bg-[#d8b6ef] py-2 flex items-center justify-center flex-col rounded-xl overflow-hidden'>
      <img className='w-12 h-[50px] object-cover hover:scale-110 transition-all' src={image} alt="" />
      <h2 className='text-[12px] text-gray-700 font-medium'>Airbuds</h2>
    </Link>
  )
}

export default CategoryCard