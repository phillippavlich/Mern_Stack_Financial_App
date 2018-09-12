import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <h1>Financial Budgeting</h1>
        <h2>Transaction</h2>
        <h3>Income</h3>
        <h3>Expense</h3>
      </div>
    );
  }
}

export default App;
