import React, { useRef, useState } from 'react'
import Logo from './Logo'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Input from './Input'
import { CiSearch } from "react-icons/ci";
import Container from './Container';
import { FaOpencart } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import Button from './Button';
import Profile from './Profile'


const Header = () => {
  const [search, setSearch] = useState("")
  const [isLogin,] = useState(false)
  const searchRef = useRef()
  const navigate = useNavigate()
  const handleSearch = () => {
    if (search !== '') {
      navigate(`search/${search}`)
      setSearch("")
    }
  }
  const buttonRef = useRef()
  return (
    <header className='w-full h-16 md:py-1 bg-[#f2f2f2]  z-10'>
      <Container>
        <nav className='flex justify-between items-center w-full'>
          <div className='flex justify-between items-center w-[60%] md:w-[32%]'>
            <div>
              <Logo />
            </div>
            <div className='hidden md:flex gap-4'>
              <div>
                <NavLink className={({ isActive }) => isActive ? "text-[#AE56EF] text-sm uppercase  font-medium  transition-all" : "text-[#222222] text-sm uppercase transition-all font-medium"} to="/" >
                  <span>home</span>
                </NavLink>
              </div>
              <div>
                <NavLink className={({ isActive }) => isActive ? "text-[#AE56EF] text-sm uppercase  font-medium transition-all" : "text-[#222222] text-sm uppercase transition-all font-medium"} to="products" >
                  <span>shop</span>
                </NavLink>
              </div>
              <div>
                <NavLink className={({ isActive }) => isActive ? "text-[#AE56EF] text-sm uppercase  font-medium transition-all" : "text-[#222222] text-sm uppercase transition-all font-medium"} to="categories" >
                  <span>Categories</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='w-[32%] hidden md:block'>
            <div className='w-full flex items-center bg-slate-300 rounded-r-full rounded-l-full '>
              <div className='w-full flex items-center justify-between  '>
                <Input
                  className='w-[85%] h-8 bg-transparent rounded-l-full text-[12px] text-gray-700 px-2 outline-none focus:border-[1px]'
                  ref={searchRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  placeholder="Search in Hamro Mart"
                />
                <div
                  className='bg-[#AE56EF] 
                  h-8 w-[15%] rounded-r-full flex items-center  justify-center cursor-pointer text-xl font-bold text-gray-300'
                  onClick={handleSearch}
                >
                  <CiSearch />
                </div>
              </div>
            </div>
          </div>
          <div className=' w-[40%] md:w-[32%] '>
            <div className='flex justify-between gap-2 items-center'>
              <div className='hidden md:flex gap-4 items-center'>
                <div>
                  <NavLink className={({ isActive }) => isActive ? "text-[#AE56EF] text-sm uppercase  font-medium  transition-all" : "text-[#222222] text-sm uppercase transition-all font-medium"} to="about" >
                    <span>about </span>
                  </NavLink>
                </div>
                <div>
                  <NavLink className={({ isActive }) => isActive ? "text-[#AE56EF] text-sm uppercase  font-medium transition-all" : "text-[#222222] text-sm uppercase transition-all font-medium"} to="contact" >
                    <span>contact </span>
                  </NavLink>
                </div>
                <div>
                  <NavLink className={({ isActive }) => isActive ? "text-[#AE56EF] text-sm uppercase  font-medium transition-all" : " text-[#222222] text-sm uppercase transition-all font-medium"} to="order" >
                    <span>Orders </span>
                  </NavLink>
                </div>

              </div>
              <div className='flex items-center gap-4'>
                <div>
                  <NavLink to={"cart"}>
                    <div className='text-3xl relative'>
                      <FaOpencart />
                      <div className='w-4 h-4 rounded-full bg-[#AE56EF] absolute flex items-center justify-center -top-1 left-5 p-2 '>
                        <span className='text-[9px] text-white'>20</span>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div>
                  {
                    isLogin ? (<Button
                      classname='bg-[#AE56EF] w-20 h-8  text-sm rounded-full font-medium text-white transition-all hover:bg-[#6d25a1]'
                      ref={buttonRef}
                    >
                      <Link to={"login"}>Login</Link>
                    </Button>)
                      :
                      (<Link to={"profile"}><Profile /></Link>)
                  }
                </div>
                <div className='block md:hidden'>
                  <MdMenu className='text-4xl text-gray-600 cursor-pointer' />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header >
  )
}

export default Header