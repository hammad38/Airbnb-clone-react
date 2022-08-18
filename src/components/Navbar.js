import React from 'react'
import airbnblogo from '../images/airbnb-logo.png'

const Navbar = () => {
  return (
   <nav>
    <img className='nav--logo' src={airbnblogo} alt="" />
   </nav>
  )
}

export default Navbar
