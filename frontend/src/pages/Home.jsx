import React from 'react'
import Slider from "../components/Slider"
import Categories from '../components/Categories'
import Service from '../components/Service'

const Home = () => {
  return (
    <main>
      <section className=''>
        <Slider />
      </section>
      <div className='my-8'>
        <Categories />
      </div>
      <div className='my-8'>
        <Service />
      </div>
    </main>
  )
}

export default Home