import React from 'react'
import Slider from "../components/Slider"
import Categories from '../components/Categories'
import Service from '../components/Service'
import Products from '../components/Products'

const Home = () => {
  return (
    <main className='mb-[70px]'>
      <section className=''>
        <Slider />
      </section>
      <div className='my-8'>
        <Categories />
      </div>
      <div className='my-8'>
        <Service />
      </div>
      <div className='my-8'>
        <Products title="top rated" />
      </div>
      <div className='my-8'>
        <Products title="best deals" />
      </div>
    </main>
  )
}

export default Home