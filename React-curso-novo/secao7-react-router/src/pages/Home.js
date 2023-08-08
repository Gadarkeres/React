import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';


const Home = ({Products}) => {
 
  return (
    <div>
     <ul className="products">
        {Products.map(Product => (
          <li key={Product.id}> 
            <h2>{Product.name}</h2>
            <p>{Product.price}R$ </p>
          </li>

        ))}
      </ul>
      {/* rota dinamica */}
      <Link to={`/products/$item.id`}>Detalhes</Link>
    </div>
  )
}

export default Home