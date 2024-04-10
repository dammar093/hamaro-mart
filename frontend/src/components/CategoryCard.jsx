import React from 'react'
import image from "../assets/image.webp"
import { Link } from 'react-router-dom'
const CategoryCard = () => {
  return (
    <Link to={"/category/jkakjakljl"} className='w-[160px] h-[200px] bg-white shadow-sm py-2 flex items-center justify-center flex-col rounded overflow-hidden'>
      <img className='w-[140px] h-[170px] object-cover hover:scale-110 transition-all' src={image} alt="" />
      <h2 className='text-[16px] text-gray-700 font-medium'>Airbuds</h2>
    </Link>
  )
}

export default CategoryCard