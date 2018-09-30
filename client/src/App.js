import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar'
import TransactionList from './components/TransactionList'
import ItemModal from './components/ItemModal'
import AccountModal from './components/AccountModal'

import Calculations from './components/Calculations';

import {Provider} from 'react-redux';
import store from './store';
import { Container} from 'reactstrap';

{
//import {getIncome, getExpenses} from './components/Calculations';

}

class App extends Component {
  
  render() {
    return (
      //this allows us to share state accross components
      <Provider store={store}>
        <div className="App">
            <AppNavBar />
            <Container>
              <h1>Financial Budgeting</h1>
              <Calculations />
              <ItemModal/>
              <TransactionList />
              <div className="addButton">
                <AccountModal/>
              </div>
            </Container>
        </div>
      </Provider>

    );
  }
}

export default App;
