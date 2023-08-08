import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link className='link' to="/"> Home</Link>
            <Link className='link' to="/About"> Sobre</Link>
            <Link className='link' to="/Product">Produtos</Link>
        </nav>
    </header>
  )
}

export default Navbar