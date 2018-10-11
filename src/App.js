
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getEnvValues() {
    if (!process.env.REACT_APP_EMPLOYEE_NAME || !process.env.REACT_APP_POSITION) {
      throw new Error('Please define `REACT_APP_EMPLOYEE_NAME` and `REACT_APP_POSITION` in your .env file');
    }

    const employeeName = process.env.REACT_APP_EMPLOYEE_NAME
    const position = process.env.REACT_APP_POSITION;

    return { employeeName, position };
  }

  render() {

    const { employeeName, position } = this.getEnvValues();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Britebee Development</h2>
        </div>
        <p className="App-intro">
           <b> Employee Name: { employeeName } </b><br/><br/>
           <b> Position: { position } </b>
        </p>
      </div>
    );
  }
}

export default App;