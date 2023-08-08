import React from 'react'
import { useContext } from "react"
import { ContadorContext } from "../context/ContadorContext"

const Product = () => {
  const {contador} = useContext(ContadorContext)
  return (
    <div> <p>
    <h2>About</h2>
    <p>valor do contador: {contador}</p>
    </p></div>
  )
}

export default Product