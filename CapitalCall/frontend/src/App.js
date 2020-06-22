import React from 'react';
import './App.css';
import PageLoader from './components/PageLoader'
import Clock from './components/Clock'

function App() {
  return (
    <div className='App'>
      <PageLoader />
      <footer className='App-footer'>
        <div className='App-info'>
          <div className='App-info-author'>Charles Hodgson</div>
          <div className='App-info-title'>Validus Risk Management Case Study</div>
          <div className='App-info-time'><Clock/></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
