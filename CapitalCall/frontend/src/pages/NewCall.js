import React from 'react';
import '../App.css';
import NavigationHeader from '../components/NavigationHeader';
import Table from '../components/Table';
import axios from 'axios';


const NewCallPage = () => {
  return (
    <div className='Newcall-page'>
      <NavigationHeader/>
      <main className='App-content'>
        <div className='Newcall'>
          <table>
            <div className="Newcall-input">
              <div className="Newcall-input-date">
                <div>Date</div>
                <div>DATE_INPUT_PLACEHOLDER</div>
              </div>
              <div className="Newcall-input-rules">
                <div>Rules</div>
                <div>RULES_INPUT_PLACEHOLDER</div>
              </div>
              <div className="Newcall-input-investment">
                <div>Investment Name</div>
                <div>INVESTMENT_NAME_INPUT_PLACEHOLDER</div>
              </div>
              <div className="Newcall-input-capital">
                <div>Capital Required for Investment</div>
                <div>CAPITAL_INPUT_PLACEHOLDER</div>
              </div>
            </div>
          </table>
          <div className='Newcall-preview-table'>
            <Table data={null} />
          </div>
        </div>
      </main>
    </div>
  )
}
export default NewCallPage;
