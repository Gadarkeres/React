import React from 'react'
import { useContadorContext } from '../hooks/useContadorContext'


const Product = () => {
  const {contador} = useContadorContext();
  return (
    <div> <p>
    <h2>Produtos</h2>
    <p>valor do contador: {contador}</p>
    </p></div>
  )
}

export default Product