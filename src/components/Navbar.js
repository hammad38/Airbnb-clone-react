import React from 'react'
import airbnblogo from '../images/airbnb-logo.png'

const Navbar = () => {
  return (
   <nav>
    <img className='nav--logo' src={airbnblogo}/>
   </nav>
  )
}

export default Navbar
