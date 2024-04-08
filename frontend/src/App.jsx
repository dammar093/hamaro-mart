import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/Header'
import Container from './components/Container'
const App = () => {
  return (
    <div>
      <div className='top-0 sticky'>
        <Header />
      </div>
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default App