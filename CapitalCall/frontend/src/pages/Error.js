import React, { Component } from 'react';
import '../App.css';


class ErrorPage extends Component {
  render() {
    return (
      <div className='Error'>
        <p>{this.props.error}</p>
      </div>
    )
  }
}

export default ErrorPage;
