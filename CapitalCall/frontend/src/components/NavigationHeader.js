import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './Logo'

const NavigationHeader = () => {
  return (
    <header className='App-header'>
      <Logo/>
      <div className='App-name-container'>
        <div className='App-name'>Capital Call</div>
      </div>
      <div className='App-navigation'>
        <Link to='/dashboard'>
          <div className='Nav-dashboard'>Dashboard</div>
        </Link>
        <Link to='/newcall'>
          <div className='Nav-newcall'>New Call</div>
        </Link>
      </div>
    </header>
  )
}
export default NavigationHeader;
