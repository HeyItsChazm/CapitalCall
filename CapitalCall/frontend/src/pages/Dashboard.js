import React, { Component } from 'react';
import './Dashboard.css';
import NavigationHeader from '../components/NavigationHeader';
import Table from '../components/Table';
import axios from 'axios';


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
      .get("api/commitments")
      .then(response => this.setState({ commitments: response.data }))
      .catch(err => console.log(err));
    axios
      .get("api/fundinvestments")
      .then(response => this.setState({ fundInvestments: response.data }))
      .catch(err => console.log(err));
  }
  renderOverview = () => {
    let overview = [];
    let funds = {};
    // Setup overview data template
    let data_template = {
      "Date": null,
      "Call #": null,
    };
    // Iterate over the funds, add each fund name to the template, and
    //    keep a reference of fund names by ID.
    for (let j = 0; j < this.state.funds.length; j++) {
      let fund = this.state.funds[j];
      data_template[fund.name] = 0;
      funds[fund.id] = fund.name;
    };
    // Sumarise overview data
    for (let i = 0; i < this.state.calls.length; i++) {
      let call = this.state.calls[i];
      let data = {...data_template};
      data["Date"] = call.date;
      data["Call #"] = call.call_id;
      for (let j = 0; j < this.state.fundInvestments.length; j++) {
          let fund_investment = this.state.fundInvestments[j];
          if (call.call_id === fund_investment.call_id) {
            data[funds[fund_investment.fund_id]] += +fund_investment.investment_amount;
          };
      };
      // Check each key for a positive (more than 0) value.
      for (var key in funds) {
        if (data[funds[key]] > 0) {
          // Append "$" and take the first 4 decimal places.
          data[funds[key]] = "$" + data[funds[key]].toFixed(4);
        } else {
          // Set the value to null for table formatting.
          data[funds[key]] = null;
        };
      };

      overview[i] = data
    };
    return (
      <div className='Dashboard-page'>
        <NavigationHeader/>
        <main className='App-content'>
          <div className='Dashboard'>
            <div className='Dashboard-table'>
              <Table data={overview} />
            </div>
          </div>
        </main>
      </div>
    )
  }
  render() {
    return (
      this.renderOverview()
    )
  }
}

export default DashboardPage;
