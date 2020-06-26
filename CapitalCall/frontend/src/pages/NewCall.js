import React, { Component } from 'react';
import './NewCall.css';
import NavigationHeader from '../components/NavigationHeader';
import BackendApi from '../components/BackendApi';
import Table from '../components/Table';
import Formatter from '../components/Formatter';

let formatter = new Formatter();
let backendApi = new BackendApi();

// Input field/label class names
const inputLabelDate = "Newcall-input-date-label";
const inputFieldDate = "Newcall-input-date-input";
const inputLabelName = "Newcall-input-name-label";
const inputFieldName = "Newcall-input-name-input";
const inputLabelRules = "Newcall-input-rules-label";
const inputFieldRules = "Newcall-input-rules-input";
const inputLabelCapital = "Newcall-input-capital-label";
const inputFieldCapital = "Newcall-input-capital-input";

// Preview table column names
const headerCommitmentId = "Commitment ID";
const headerFundId = "Fund ID";
const headerDate = "Date";
const headerFundName = "Fund";
const headerCommitedAmounts = "Commited Amounts";
const headerUndrawnCapitalBefore = "Undrawn Capital Commitment before Current Drawdown Notice";
const headerTotalDrawdown = "Total Drawdown Notice";
const headerUndrawnCapitalAfter = "Undrawn Capital Commitment after Current Drawdown Notice";

// Preview table data template
let previewDataTemplate = {
  "Commitment ID": null,
  "Fund ID": null,
  "Date": null,
  "Fund": null,
  "Commited Amounts": null,
  "Undrawn Capital Commitment before Current Drawdown Notice": null,
  "Total Drawdown Notice": null,
  "Undrawn Capital Commitment after Current Drawdown Notice": null,
};

// Add rule options here
const Rules = () => {
  return (
    <div className="Newcall-input-rules">
      <label className={inputLabelRules} htmlFor="rules">Rules</label>
      <select className={inputFieldRules} id="rules">
        <option value="fifo">First In First Out (FIFO)</option>
      </select>
    </div>
  )
}

class NewCallPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      funds: [],
      calls: [],
      commitments: [],
      fundInvestments: [],
    };
    this.maxInvestment = 0;
    this.data = [];
    this.sufficientCapital = false;
    this.saveCall = this.saveCall.bind(this);
  }
  componentDidMount() {
    this.refreshAPI();
  }
  refreshAPI = () => {
    backendApi.getApiFunds().then(
      funds => this.setState({ funds: funds })
    )
    backendApi.getApiCalls().then(
      calls => this.setState({ calls: calls })
    )
    backendApi.getApiCommitments().then(
      commitments => this.setState({ commitments: commitments })
    )
    backendApi.getApiFundInvestments().then(
      fundInvestments => this.setState({ fundInvestments: fundInvestments })
    )
  }
  getInput = (field_name) => {
    // Retrieves value of an input field. If the input field is not in scope
    //  (undefined), null will be returned.
    let input = document.getElementsByClassName(field_name)[0]
    if (input !== undefined) {
      return input.value
    }
    return null;
  }
  setInput = (field_name, value) => {
    // Sets the value of an input field. If the input field is not in scope
    //  (undefined), nothing will occur.
    let input = document.getElementsByClassName(field_name)[0]
    if (input !== undefined) { input.value = value }
  }
  getInputDate = (displayAlert=true) => {
    let date = this.getInput(inputFieldDate);
    if ( date === null || date === "" ) {
      console.log("Null date detected.");
      if ( displayAlert ) {
          alert("Please enter a date.");
      }
      return null;
    }
    return new Date(date);
  }
  getInputRules = (displayAlert=true) => {
    let rule = this.getInput(inputFieldRules);
    if ( rule === null || rule === "" ) {
      console.log("Null rule detected.");
      if ( displayAlert ) {
          alert("Please select a rule.");
      }
      return null;
    }
    return String(rule);
  }
  getInputInvestmentName = (displayAlert=true) => {
    let name = this.getInput(inputFieldName);
    if ( name === null  || name === "" ) {
      console.log("Null investment name detected.");
      if ( displayAlert ) {
        alert("Please enter an investment name.");
      }
      return null;
    }
    return String(name);
  }
  getInputCapital = (displayAlert=true) => {
    let investment = this.getInput(inputFieldCapital);
    if ( isNaN(investment) ) {
      console.log("NaN investment amount detected.");
      if ( displayAlert ) {
          alert("Please enter a numeric investment amount.");
      }
      return null;
    } else if ( investment > this.maxInvestment ) {
      console.log("Max investment amount exceeded.");
      this.setInput(inputFieldCapital, this.maxInvestment)
      return null;
    } else if ( 0 >= investment ) {
      console.log("Min investment amount not met.");
      if ( displayAlert ) {
          alert("Please enter a positive investment amount.");
      }
      return null;
    } else {
      return parseFloat(investment);
    }
  }
  getInvestmentsByCommitmentID = () => {
    let investmentsByCommitmentID = {};
    for (let i = 0; i < this.state.fundInvestments.length; i++) {
      let fund_investment = this.state.fundInvestments[i];
      let id = fund_investment.commitment_id
      if (!(id in investmentsByCommitmentID)){
        investmentsByCommitmentID[id] = 0;
      }
      investmentsByCommitmentID[id] += +fund_investment.investment_amount;
    };
    return investmentsByCommitmentID;
  }
  getPreview() {
    this.data = [];
    // Check connection was established.
    if (this.state.commitments === undefined || this.state.funds === undefined) {
      return null;
    }
    let preview = [];
    let maxInvestment = 0;
    let committedInvestments = this.getInvestmentsByCommitmentID();
    let capitalRequired = this.getInputCapital(false) ?? 0;
    let remainingCapital = capitalRequired;
    let fundsById = this.state.funds.reduce(
      (data, fund) => ({...data, [fund.id]: fund.name }), {}
    )
    // Summarise preview data
    for (let i = 0; i < this.state.commitments.length; i++) {
      let commitment = this.state.commitments[i];
      let data = {...previewDataTemplate};

      let undrawn_capital_before = parseFloat(commitment.amount);
      // Assign values already prepared to data
      data[headerCommitmentId] = parseInt(commitment.id);
      data[headerFundId] = parseInt(commitment.fund_id);
      data[headerDate] = new Date(commitment.date);
      data[headerFundName] = fundsById[commitment.fund_id];
      data[headerCommitedAmounts] = parseFloat(commitment.amount);
      // Calculate undrawn capital before
      if (commitment.id in committedInvestments) {
        undrawn_capital_before -= committedInvestments[commitment.id];
      }
      // Calculate total drawdown notice
      let total_drawdown = Math.min(undrawn_capital_before, remainingCapital)
      remainingCapital -= total_drawdown;
      // Calculate undrawn capital after
      let undrawn_capital_after = undrawn_capital_before - total_drawdown;
      // Assign calculated values to data
      data[headerUndrawnCapitalBefore] = undrawn_capital_before;
      data[headerTotalDrawdown] = total_drawdown;
      data[headerUndrawnCapitalAfter] = undrawn_capital_after;
      let previewData = {...data};
      previewData[headerDate] = data[headerDate].toISOString().split('T')[0];
      previewData[headerCommitedAmounts] = formatter.formatCurrency(
        data[headerCommitedAmounts]);
      previewData[headerUndrawnCapitalBefore] = formatter.formatCurrency(
        data[headerUndrawnCapitalBefore]);
      previewData[headerTotalDrawdown] = formatter.formatCurrency(
        data[headerTotalDrawdown]);
      previewData[headerUndrawnCapitalAfter] = formatter.formatCurrency(
        data[headerUndrawnCapitalAfter]);
      this.data.push(data);
      preview.push(previewData);
      maxInvestment += +undrawn_capital_before;
    }
    this.sufficientCapital = remainingCapital === 0;
    this.maxInvestment= maxInvestment;
    return preview;
  }
  saveCall() {
    let date = this.getInputDate();
    if ( date === null ) { return }
    let name = this.getInputInvestmentName();
    if ( name === null ) { return }
    let investment = this.getInputCapital();
    if ( investment === null ) { return }
    let call_data = {
      date: date.toISOString().split('T')[0],
      investment_name: name,
      capital_requirement: investment,
    }
    backendApi.postApiCalls(call_data);
    // Next highest id in calls.
    let mostRecentID = Math.max.apply(Math, this.state.calls.map(
      call => { return call.id }
    )) + 1;
    // Save Fund Investments
    for (var index in this.data) {
      let row = this.data[index];
      let investment = row[headerTotalDrawdown];
      if (investment > 0) {
        backendApi.postApiFundInvestments({
          call_id: mostRecentID,
          commitment_id: row[headerCommitmentId],
          fund_id: row[headerFundId],
          investment_amount: row[headerTotalDrawdown],
        });
      };
    }
    // Refresh the calls list.
    backendApi.getApiCalls().then((calls) => {
      this.setState({ calls: calls, })
    });
    // Refresh the fund investments list.
    backendApi.getApiFundInvestments().then((fundInvestments) => {
      this.setState({ fundInvestments: fundInvestments, })
    });
    alert("Call #" + mostRecentID + "has been created.");
    this.setInput(inputFieldDate, "");
    this.setInput(inputFieldName, "");
    this.setInput(inputFieldCapital, "");
  }
  renderPreview = () => {
    return (
      <div className='Newcall-preview-table'>
        <Table data={this.getPreview()} />
      </div>
    )
  }
  render() {
    return (
      <div className='Newcall-page'>
        <NavigationHeader />
        <main className='App-content'>
          <div className='Newcall'>
            <div className="Newcall-input">
              <div className="Newcall-input-date">
                <label className={inputLabelDate} htmlFor="date-input">Date</label>
                <input className={inputFieldDate} id="date-input" type="date" />
              </div>
              <Rules />
              <div className="Newcall-input-name">
                <label className={inputLabelName} htmlFor="investment-name">Investment Name</label>
                <input className={inputFieldName} id="investment-name" type="text" />
              </div>
              <div className="Newcall-input-capital">
                <label className={inputLabelCapital} htmlFor="capital-investment">Capital Required for Investment</label>
                <input className={inputFieldCapital} id="capital-investment" type="number" step="100000" min="0" max={this.maxInvestment} placeholder="$" onChange={this.refreshAPI}/>
              </div>
              <div className="Newcall-confirm">
                <button className="Newcall-confirm-button" onClick={this.saveCall}>Confirm</button>
              </div>
            </div>
            {this.renderPreview()}
          </div>
        </main>
      </div>
    )
  }
}

export default NewCallPage;
