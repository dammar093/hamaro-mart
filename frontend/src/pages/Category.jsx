import React from 'react'
import { useParams } from "react-router-dom"
import Card from '../components/Card'
import Pagination from '../components/Pagination'

const Category = () => {
  const { category } = useParams()
  return (
    <section className=' w-full mb-[70px] my-4'>
      <div className='overflow-x-hidden'>
        <h2 className='text-[16px]  md:text-xl font-semibold md:font-medium text-gray-600 uppercase my-1'>{category}</h2>
        <div className='grid  grid-cols-2  md:grid-cols-5  xl:grid-cols-6 gap-2 w-full mx-auto'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Pagination />
      </div>

    </section>
  )
}

export default Category