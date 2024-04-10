import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import Card from '../components/Card'

const Search = () => {
  const { category } = useParams()
  return (
    <section className=' w-full mb-[70px] my-4'>
      <div className='overflow-x-hidden'>
        <h2 className='text-[16px]  md:text-xl font-semibold md:font-medium text-gray-600 uppercase my-1'>Searh results</h2>
        <div className='grid  grid-cols-2  md:grid-cols-5  xl:grid-cols-6 gap-2'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}

export default Search