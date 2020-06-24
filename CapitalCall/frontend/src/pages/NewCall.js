import React, { Component } from 'react';
import './NewCall.css';
import NavigationHeader from '../components/NavigationHeader';
import Table from '../components/Table';
import axios from 'axios';


const Rules = () => {
  return (
    <div className="Newcall-input-rules">
      <div className="Newcall-input-rules-label">
        <label for="rules">Rules</label>
      </div>
      <div className="Newcall-input-rules-input">
        <select id="rules">
          <option value="fifo">First In First Out (FIFO)</option>
        </select>
      </div>
    </div>
  )
}

class NewCallPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      funds: [],
      calls: [],
      commitments: [],
      fundInvestments: [],
      overview: [],
    }
  }
  componentDidMount() {
    this.refreshAPI();
  }
  refreshAPI = () => {
    axios
      .get("api/funds")
      .then(response => this.setState({ funds: response.data }))
      .catch(err => console.log(err));
    axios
      .get("api/calls")
      .then(response => this.setState({ calls: response.data }))
      .catch(err => console.log(err));
    axios
      .get("api/fundinvestments")
      .then(response => this.setState({ fundInvestments: response.data }))
      .catch(err => console.log(err));
  }
  render () {
    return (
      <div className='Newcall-page'>
        <NavigationHeader/>
        <main className='App-content'>
          <div className='Newcall'>
            <div className="Newcall-input">
              <div className="Newcall-input-date">
                <div className="Newcall-input-date-label">
                  <label for="date-input">Date</label>
                </div>
                <div className="Newcall-input-date-input">
                  <input id="date-input" type="date" />
                </div>
              </div>
              <Rules />
              <div className="Newcall-input-name">
                <div className="Newcall-input-name-label">
                  <label for="investment-name">Investment Name</label>
                </div>
                <div className="Newcall-input-name-input">
                  <input id="investment-name" type="text" />
                </div>
              </div>
              <div className="Newcall-input-capital">
                <div className="Newcall-input-capital-label">
                  <label for="capital-investment">Capital Required for Investment</label>
                </div>
                <div className="Newcall-input-capital-input">
                  <input id="capital-investment" type="number" step="any" min="1" placeholder="$"/>
                </div>
              </div>
            </div>
            <div className='Newcall-preview-table'>
              <Table data={null} />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default NewCallPage;
