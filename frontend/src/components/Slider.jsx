import React, { useEffect, useState } from 'react'
import slider1 from "../assets/slider1.jpg"
import slider2 from "../assets/slider2.jpg"
import slider3 from "../assets/slider3.jpg"
import slider4 from "../assets/slider4.jpg"
import slider5 from "../assets/slider5.jpg"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'


const Slider = () => {
  const [index, setIndex] = useState(0)
  const sliderItems = [
    {
      id: 1,
      image: slider1,
    },
    {
      id: 2,
      image: slider2,
    },
    {
      id: 3,
      image: slider3,
    },
    {
      id: 4,
      image: slider4,
    },
    {
      id: 5,
      image: slider5,
    },
  ]
  const handleForward = () => {
    if (index < sliderItems.length - 1) {
      setIndex(prev => prev + 1)
    }
    else {
      setIndex(0)
    }

  }
  const handleBackward = () => {
    if (index <= 0) {
      setIndex(sliderItems.length - 1)
    }
    setIndex(prev => prev - 1)
  }



  useEffect(() => {
    const inerval = setInterval(handleForward, 3000);

    return () => clearInterval(inerval)
  }, [handleForward])


  return (
    <section className='w-full h-[200px] md:h-[350px] flex items-center'>
      <div className='overflow-x-scroll md:overflow-x-hidden scrollbar-hide relative w-full h-full flex rounded-md snap-x '>
        {
          sliderItems.map(item => (
            <div className={`min-w-full h-full overflow-hidden snap-center transition-all delay-2000 `} key={item.id}>
              <img className="w-full h-full  object-cover" src={sliderItems[index]?.image} alt="slider image" />
            </div>
          ))
        }
      </div>
      <div className='hidden w-fitt w-10 h-10 md:flex items-center justify-center text-gray-600  text-2xl cursor-pointer bg-[#ffffffae] hover:bg-[#808080db] hover:text-white p-2 rounded-full left-2 absolute transition-all'>
        <MdOutlineArrowBackIos onClick={handleBackward} />
      </div>
      <div className='hidden w-fitt w-10 h-10 md:flex items-center justify-center text-gray-600  text-2xl cursor-pointer bg-[#ffffffae] hover:bg-[#808080db] hover:text-white p-2 rounded-full right-2 absolute transition-all'>
        <MdOutlineArrowForwardIos onClick={handleForward} />
      </div>
    </section>
  )
}

export default Slider