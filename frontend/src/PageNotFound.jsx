import React from 'react'
import page from "./assets/page.gif"
import Container from "./components/Container"
const PageNotFund = () => {
  return (
    <Container>
      <div className='w-full h-[500px] flex justify-center items-center'>
        <img className='w-full h-[70%] object-scale-down' src={page} alt="" />
      </div>
    </Container>
  )
}

export default PageNotFund