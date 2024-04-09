import React from 'react'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
const Logo = () => {
  return (
    <Link to="/">
      <div className='w-14 h-12 md:h-12 bg-[#d8b6ef] rounded-md flex justify-center items-center'>
        <img className='w-14 h-12 object-cover' src={logo} alt="logo" />
      </div>
    </Link>
  )
}

export default Logo