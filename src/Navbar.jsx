import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


const Navbar = () => {
    return (
        <div className='navbar'>
             <ul className='nav-lists'>
                <Link to="/" className='home'>
                <li>Home</li>
                </Link>
                <Link to="/about" className='about'>
                <li>About</li>
                </Link>
                <Link to="/contact" className='contact'>
                <li>Contact</li>
                </Link>
                <Link to="/products" className='products'>
                <li>Products</li>
                </Link>
             </ul>
        </div>
    )
}


export default Navbar
