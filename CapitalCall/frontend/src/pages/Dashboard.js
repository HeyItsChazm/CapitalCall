import React, { Component } from 'react';
import './Dashboard.css';
import NavigationHeader from '../components/NavigationHeader';
import Table from '../components/Table';
import axios from 'axios';

// const data = [
//   {
//     'Date': '31/01/2018',
//     'Call #': 1,
//     'Fund 1': 9500000.00,
//     'Fund 2': '-',
//     'Fund 3': null,
//     'Fund 4': null,
//   }
// ]
class DashboardPage extends Component {
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
  componentDidMount(){
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
      .get("api/commitments")
      .then(response => this.setState({ commitments: response.data }))
      .catch(err => console.log(err));
    axios
      .get("api/fundinvestments")
      .then(response => this.setState({ fundInvestments: response.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className='Dashboard-page'>
        <NavigationHeader/>
        <main className='App-content'>
          <div className='Dashboard'>
            <div className='Dashboard-table'>
              <Table data={this.state.funds} />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default DashboardPage;
