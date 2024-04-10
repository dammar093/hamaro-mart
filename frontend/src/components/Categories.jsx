import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";


const Categories = () => {
  return (
    <section className=' w-full'>
      <div className='flex items-center gap-2 scrollbar-hide overflow-x-scroll md:overflow-x-hidden md:grid grid-cols-8'>
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
      </div>

    </section>
  )
}

export default Categories