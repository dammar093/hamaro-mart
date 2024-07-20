import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import Card from '../components/Card'
import DropDown from "../components/DropDown"
import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'

const Search = () => {
  const { q } = useParams();
  const searchQuery = q.split("=")[1]
  const products = useSelector(state => state.products.search);
  console.log("products", products);
  if (products.length == 0) {
    return (
      <section className='w-full mb-20 my-4'>
        <h2 className='text-gray-600 font-semibold uppercase text-center'>No search resulsts of <span className='text-[#AE56EF]'>{searchQuery}</span></h2>
      </section>
    )
  }
  return (
    <section className=' w-full mb-[70px] my-4'>
      <div className='overflow-x-hidden'>
        <div className='flex justify-between my-4'>
          <h2 className='text-[16px]  md:text-xl font-semibold md:font-medium text-gray-600 uppercase my-1'>Searh Results <span className='text-[#AE56EF]'> {searchQuery}</span></h2>
          <div>
            <DropDown />
          </div>
        </div>
        <div className='grid  grid-cols-2  md:grid-cols-5  xl:grid-cols-6 gap-2'>
          {
            products.map(item => (
              <Card item={item} key={item.id} />
            ))
          }
        </div>
        <Pagination />
      </div>
    </section>
  )
}

export default Search