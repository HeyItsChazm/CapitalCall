import React from 'react';
import { Link } from 'react-router-dom'
import './Welcome.css';

const WelcomePage = () => {
  return (
    <div className='Welcome'>
      <Link to='/dashboard'>
        <button className='Welcome-button' href='/dashboard'>
          Capital Call
        </button>
      </Link>
    </div>
  )
}
export default WelcomePage;
