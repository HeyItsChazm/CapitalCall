import React from 'react';
import '../App.css';
import logo from '../logo.png';

const WelcomePage = () => {
  return (
    <body>
      <div className="header">
        <img className="logo" src={logo} alt="Validus Risk Management"></img>
        <hr />
      </div>
      <grid className="content">
        <button className="welcomeButton" href="/dashboard">
          Capital Call
        </button>
      </grid>
    </body>
  )
}
export default WelcomePage;
