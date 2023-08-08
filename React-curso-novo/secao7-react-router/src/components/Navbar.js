import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
// links com react router

export const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
    </nav>
  )
}

export default Navbar;