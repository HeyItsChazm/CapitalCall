import React from 'react';
import '../App.css';
import NavigationHeader from '../components/NavigationHeader';

const NewCallPage = () => {
  return (
    <div className='Newcall-page'>
      <NavigationHeader/>
      <main className='App-content'>
        <div className='Newcall'>
          New Call
        </div>
      </main>
    </div>
  )
}
export default NewCallPage;
