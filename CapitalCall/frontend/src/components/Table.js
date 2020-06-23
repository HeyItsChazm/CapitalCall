import React, { Component } from 'react';

class Table extends Component {
  renderTableRow(headerRow, data) {
    let row = [];
    for (let i = 0; i < headerRow.length; i++) {
      let tableRowData = data[headerRow[i]] ?? '-';
      row.push(<td key={i}>{tableRowData}</td>)
    }
    return <tr>{row}</tr>
  }
  render () {
    if (this.props.data == null || this.props.data.length === 0) {
      return (
        <table>
          <tr>
            <th key={"NA"}>No Data Available</th>
          </tr>
        </table>
      )
    };
    const headerRow = Object.keys(...this.props.data);
    return (
      <table>
        <tbody>
          <tr>
            {headerRow.map(header => {
              return <th key={header}>{header}</th>;
            })}
          </tr>
          {this.props.data.map(data => {
            return this.renderTableRow(headerRow, data);
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
