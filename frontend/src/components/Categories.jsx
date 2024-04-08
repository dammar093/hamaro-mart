import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";


const Categories = () => {
  return (
    <section className='my-2 flex justify-center items-center gap-4 relative'>
      <div className='flex items-center gap-2 scrollbar-hide overflow-x-scroll  '>

        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>

        <div className='hidden w-fitt w-8 h-8 md:flex items-center justify-center text-gray-600  text-2xl cursor-pointer bg-[#ffffffae] hover:bg-[#808080db] hover:text-white p-2 rounded-full left-0 absolute transition-all'>
          <MdOutlineArrowBackIos />
        </div>
        <div className='hidden w-fitt w-8 h-8 md:flex items-center justify-center text-gray-600  text-2xl cursor-pointer bg-[#ffffffae] hover:bg-[#808080db] hover:text-white p-2 rounded-full right-0 absolute transition-all'>
          <MdOutlineArrowForwardIos />
        </div>

      </div>

    </section>
  )
}

export default Categories