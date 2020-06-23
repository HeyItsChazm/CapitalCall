import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Welcome.css';
import WelcomeHeader from '../components/WelcomeHeader';


class WelcomePage extends Component {
  render() {
    return (
      <div className='WelcomePage'>
        <WelcomeHeader/>
        <main className='App-content'>
          <div className='Welcome'>
            <Link to='/dashboard'>
              <button className='Welcome-button' href='/dashboard'>
                Capital Call
              </button>
            </Link>
          </div>
        </main>
      </div>
    )
  }
}

export default WelcomePage;
