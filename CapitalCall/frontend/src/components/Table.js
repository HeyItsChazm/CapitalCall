import React, { Component } from 'react';

class Table extends Component {
  parseTableRow = (row, headers) => {
    let tableRow = [];
    for (var header in row) {
      let className = "row_" + header.replace(/ /g,"_");
      let value = row[header];
      // If the value is equal to 0 (numeric) or "" (string), and the header does not
      //    contain the substring "ID" then set the value to null to render the data as
      //    "-" instead.
      let isIDColumn = String(header).toUpperCase().indexOf("ID") !== -1
      if ((value === 0 || value === "") && !isIDColumn ) {
        value = null;
      }
      tableRow.push(
        <td key={String(header)} className={className}>{String(value ?? "-")}</td>
      );
    }
    return tableRow
  }
  parseTableRows = (rows, headers) => {
    let tableRows = [];
    for (var index in rows) {
      tableRows.push(
        <tr key={index}>{this.parseTableRow(rows[index], headers)}</tr>
      )
    }
    return tableRows
  }
  parseTableHeaders = (headers) => {
    let tableHeaders = [];
    for (var index in headers) {
      tableHeaders.push(<th key={index}>{String(headers[index])}</th>)
    }
    return tableHeaders
  }
  parseColumnGroups = (headers) => {
    let columnGroups = [];
    for (var index in headers) {
      let className = "col_" + headers[index].replace(/ /g,"_");
      columnGroups.push(<col key={index} className={className}/>)
    }
    return columnGroups
  }
  parseTable = (rows, headers) => {
    return (
      <table>
        <colgroup>
          {this.parseColumnGroups(headers)}
        </colgroup>
        <thead>
          <tr>{this.parseTableHeaders(headers)}</tr>
        </thead>
        <tbody>
          {this.parseTableRows(rows, headers)}
        </tbody>
      </table>
    )
  }
  parseNullTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th key={"NA"}>No Data Available</th>
          </tr>
        </thead>
      </table>
    )
  }
  render () {
    try {
      if (!(this.props.data === null || this.props.data === undefined || this.props.data.length === 0)){
        const headerRow = Object.keys(...this.props.data);
        return this.parseTable(this.props.data, headerRow);
      };
      return this.parseNullTable();
    } catch(err) {
      console.log(err);
      return this.parseNullTable();
    };
  }
}

export default Table;
