import React from 'react';
import '../App.css';
import logo from '../logo.png';

const ErrorPage = () => {
  return (
    <body>
      <div className="Header">
        <img className="Logo" src={logo} alt="Validus Risk Management"/>
        <hr></hr>
      </div>
      <p>Error 404: Page not found.</p>
    </body>
  )
}
export default ErrorPage;
