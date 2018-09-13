import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar'
import ShoppingList from './components/ShoppingList'

import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      //this allows us to share state accross components
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <h1>Financial Budgeting</h1>
          <h2>Transaction</h2>
          <h3>Income</h3>
          <h3>Expense</h3>
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
