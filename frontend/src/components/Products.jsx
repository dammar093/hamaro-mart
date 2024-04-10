import React from 'react'
import Card from './Card'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

const Products = ({ title }) => {
  return (
    <section className='relative flex items-center'>
      <div className='overflow-x-hidden'>
        <h2 className='text-[16px] md:text-2xl font-semibold md:font-medium text-gray-600 uppercase my-1'>{title}</h2>
        <div className='flex gap-2 overflow-x-scroll scroll-smooth scrollbar-hide'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className='hidden w-fitt w-8 h-8 md:flex items-center justify-center text-gray-600  text-2xl cursor-pointer bg-[#ffffffae] hover:bg-[#808080db] hover:text-white p-2 rounded-full left-0 absolute transition-all top-1/2'>
        <MdOutlineArrowBackIos />
      </div>
      <div className='hidden w-fitt w-8 h-8 md:flex items-center justify-center text-gray-600  text-2xl cursor-pointer bg-[#ffffffae] hover:bg-[#808080db] hover:text-white p-2 rounded-full top-1/2 right-0 absolute transition-all'>
        <MdOutlineArrowForwardIos />
      </div>
    </section>
  )
}

export default Products