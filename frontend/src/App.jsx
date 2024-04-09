import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/Header'
import Container from './components/Container'
import BottomNavbar from './components/BottomNavbar'
const App = () => {
  return (
    <div>
      <div className='top-0 sticky z-20'>
        <Header />
      </div>
      <Container>
        <Outlet />
      </Container>
      <div className='bottom-0 fixed z-20 w-full '>
        <BottomNavbar />
      </div>
    </div>
  )
}

export default App