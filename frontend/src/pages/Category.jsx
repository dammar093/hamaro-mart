import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { searchByCategory } from '../features/productSlice'

const Category = () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.searchCategory)
  console.log(products);
  const searchQuery = category.split("=")[1]
  console.log(searchQuery);

  useEffect(() => {
    dispatch(searchByCategory(searchQuery.toLowerCase().trim()))
  }, [])
  return (
    <section className=' w-full mb-[70px] my-4'>
      <div className='overflow-x-hidden'>
        <h2 className='text-[16px]  md:text-xl font-semibold md:font-medium text-gray-600 uppercase my-1'>{category}</h2>
        <div className='grid  grid-cols-2  md:grid-cols-5  xl:grid-cols-6 gap-2 w-full mx-auto'>
          {
            products.map(product => (
              <Card item={product} key={product.id} />
            ))
          }
        </div>
        <Pagination />
      </div>

    </section>
  )
}

export default Category