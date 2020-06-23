import React from 'react';
import logo from '../logo.jpg';
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <img className='App-logo' src={logo} alt='Validus Risk Management' />
    </Link>
  )
}
export default Logo;
