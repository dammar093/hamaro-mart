import React from 'react'
import Slider from "../components/Slider"
import Categories from '../components/Categories'
const Home = () => {
  return (
    <main>
      <section className=''>
        <Slider />
      </section>
      <div className='my-8'>
        <Categories />
      </div>
    </main>
  )
}

export default Home