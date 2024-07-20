import React from 'react'
import CategoryCard from '../components/CategoryCard'
import categories from '../data/categories'

const Categoreis = () => {
  return (
    <div className='mx-auto w-full my-4 mb-20'>
      <h2 className='text-xl uppercase text-gray-600 mtext-[14px] font-semibold md:text-xl md:font-medium py-2'>Categories</h2>
      <div className='grid grid-cols-2 gap-4 w-full  md:grid-cols-4 lg:grid-cols-6 md:gap-2 '>
        {
          categories.map(category => (
            <div key={category.id}>
              <CategoryCard category={category} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categoreis