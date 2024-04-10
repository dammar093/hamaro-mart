import React from 'react'
import service from "../assets/service.png"
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"
import service4 from "../assets/service4.png"
import service5 from "../assets/service5.png"

const services = [
  {
    title: "best deals",
    image: service
  },
  {
    title: "24/7 service",
    image: service1
  },
  {
    title: "fast delivey",
    image: service2
  },
  {
    title: "save money",
    image: service3
  },
  {
    title: "cash on delivey",
    image: service4
  },
  {
    title: "secure payment",
    image: service5
  },

]

const Service = () => {
  return (
    <section>
      <div className='flex justify-between overflow-x-scroll scroll-smooth scrollbar-hide md:overflow-x-hidden w-full'>
        {
          services.map(service => (
            <div className='bg-[#B1DDDD] mx-1 min-w-[180px] max-w-[200px] h-[70px] rounded-md flex items-center p-1 justify-between' key={service.title}>
              <div>
                <h2 className='uppercase font-medium text-gray-700'>{service.title}</h2>
              </div>
              <div>
                <img className='w-[60px] h-[60px] object-scale-down' src={service.image} alt="" />
              </div>
            </div>

          ))
        }
      </div>
    </section>
  )
}

export default Service