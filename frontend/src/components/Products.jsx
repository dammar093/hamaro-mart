import React from 'react';
import Card from './Card';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { useSelector } from 'react-redux'

const Products = ({ title }) => {
  const products = useSelector(state => state.products.products);
  console.log(products);
  return (
    <section className=' w-full relative flex items-center'>
      <div className='overflow-x-hidden'>
        <h2 className='text-[16px] md:text-xl font-semibold md:font-medium text-gray-600 uppercase my-1'>{title}</h2>
        <div className='flex gap-2 overflow-x-scroll scroll-smooth scrollbar-hide'>
          {
            products.map(item => (
              <Card item={item} key={item.id} />
            ))
          }
        </div>
      </div>
      <div className='hidden w-fitt w-8 h-8 md:flex items-center justify-center text-gray-600  text-2xl cursor-pointer bg-[#ffffffae] hover:bg-[#808080db] hover:text-white p-2 rounded-full -left-2 absolute transition-all top-1/2'>
        <MdOutlineArrowBackIos />
      </div>
      <div className='hidden w-fitt w-8 h-8 md:flex items-center justify-center text-gray-600  text-2xl cursor-pointer bg-[#ffffffae] hover:bg-[#808080db] hover:text-white p-2 rounded-full top-1/2 -right-2 absolute transition-all'>
        <MdOutlineArrowForwardIos />
      </div>
    </section>
  )
}

export default Products