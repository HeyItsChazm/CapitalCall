import React from 'react';
import '../App.css';
import logo from '../logo.png';

const DashboardPage = () => {
  return (
    <body>
      <div className="header">
        <img className="logo" src={logo} alt="Validus Risk Management"></img>
        <hr />
      </div>
      <p>Dashboard Page</p>
    </body>
  )
}
export default DashboardPage;
