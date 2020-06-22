import React from 'react';
import './Dashboard.css';
import NavigationHeader from '../components/NavigationHeader';
import Table from '../components/Table'

const data = [
  {
    'Date': '31/01/2018',
    'Call #': 1,
    'Fund 1': 9500000.00,
    'Fund 2': '-',
    'Fund 3': null,
    'Fund 4': null,
  }
]

const DashboardPage = () => {
  return (
    <div className='Dashboard-page'>
      <NavigationHeader/>
      <main className='App-content'>
        <div className='Dashboard'>
          <div className='Dashboard-table'>
            <Table data={data} />
          </div>
        </div>
      </main>
    </div>
  )
}
export default DashboardPage;
