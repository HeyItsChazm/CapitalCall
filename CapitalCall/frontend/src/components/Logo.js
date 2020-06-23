import React from 'react';
import logo from '../logo.jpg';
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='App-logo-container'>
      <Link to='/'>
        <img className='App-logo' src={logo} alt='Validus Risk Management' />
      </Link>
    </div>
  )
}
export default Logo;
