import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import Card from '../components/Card'
import DropDown from "../components/DropDown"
import Pagination from '../components/Pagination'

const Search = () => {
  const { category } = useParams()
  return (
    <section className=' w-full mb-[70px] my-4'>
      <div className='overflow-x-hidden'>
        <div className='flex justify-between my-4'>
          <h2 className='text-[16px]  md:text-xl font-semibold md:font-medium text-gray-600 uppercase my-1'>Searh Results  {category}</h2>
          <div>
            <DropDown />
          </div>
        </div>
        <div className='grid  grid-cols-2  md:grid-cols-5  xl:grid-cols-6 gap-2'>
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

export default Search