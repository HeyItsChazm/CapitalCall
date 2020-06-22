import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom'
import './App.css';
import PageLoader from './components/PageLoader'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='/'>
          <img className='App-logo' src={logo} alt='Validus Risk Management' />
        </Link>
      </header>
      <main className='App-content'>
        <PageLoader />
      </main>
      <footer className='App-footer'>
        <div className='App-info'>
          <div className='App-info-author'>Charles Hodgson</div>
          <div className='App-info-title'>Case Study</div>
          <div className='App-info-time'>Time</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
