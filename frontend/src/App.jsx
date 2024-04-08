import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/Header'
const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  )
}

export default App