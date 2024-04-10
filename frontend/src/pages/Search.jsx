import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import Card2 from '../components/Card2'

const Search = () => {
  const [searchItms, setSearchItems] = useState(["sadd"])
  return (
    searchItms.length > 0 ? (
      <section className=' w-full mb-[70px]'>
        <div className='overflow-x-hidden'>
          <h2 className='text-[16px] md:text-xl font-semibold md:font-medium text-gray-600 uppercase my-1'>Search Results</h2>
          <div className='grid  grid-cols-2  md:grid-cols-5  xl:grid-cols-6 gap-2'>
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
        </div>

      </section>
    )
      :
      <divc className="w-full">
        <h2 className='text-2x text-gray-600'>Notems Found</h2>
      </divc>
  )
}

export default Search