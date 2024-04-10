import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";


const Categories = () => {
  return (
    <section className=' w-full'>
      <div className='flex items-center gap-2 scrollbar-hide overflow-x-scroll md:overflow-x-hidden md:grid grid-cols-12'>
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

        {/* <div className='hidden w-fitt w-8 h-8 md:flex items-center justify-center text-gray-600  text-2xl cursor-pointer bg-[#ffffffae] hover:bg-[#808080db] hover:text-white p-2 rounded-full left-0 absolute transition-all'>
          <MdOutlineArrowBackIos />
        </div>
        <div className='hidden w-fitt w-8 h-8 md:flex items-center justify-center text-gray-600  text-2xl cursor-pointer bg-[#ffffffae] hover:bg-[#808080db] hover:text-white p-2 rounded-full right-0 absolute transition-all'>
          <MdOutlineArrowForwardIos />
        </div> */}

      </div>

    </section>
  )
}

export default Categories