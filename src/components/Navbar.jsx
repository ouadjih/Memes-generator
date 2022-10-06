import React from 'react'
import './Navbar.css'
import logo from '../trollface.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav'>
        <div className='logo'> 
        <Link to ='/Home'> <img className="nav-img"src={logo} alt="trolllogo" /> <span className='bold'>Meme Generator</span></Link>
        </div>
          <Link to ='/contact'>contact</Link>
          <Link to ='/interaction'>Interraction</Link>
        <div className='nav-right'>React Course - Project 3</div>
    </div>
  )
}
