import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/Header'
const App = () => {
  return (
    <div>
      <div className='top-0 sticky'>
        <Header />
      </div>
      <Outlet />
    </div>
  )
}

export default App