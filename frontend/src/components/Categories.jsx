import React from 'react'
import CategoryCard from '../components/CategoryCard'
import categories from '../data/categories'

const Categories = () => {
  return (
    <section className=' w-full'>
      <div className='flex items-center gap-2 scrollbar-hide overflow-x-scroll md:overflow-x-hidden md:grid grid-cols-8'>
        {
          categories.map(item => (
            <div key={item.id}>
              <CategoryCard category={item} />
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Categories