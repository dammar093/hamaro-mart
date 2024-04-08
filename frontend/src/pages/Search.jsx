import React from 'react'
import { useParams } from "react-router-dom"
const Search = () => {
  const { q } = useParams()
  return (
    <div>{q}</div>
  )
}

export default Search