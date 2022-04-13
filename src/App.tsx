import React from 'react';
import './App.css';
import { Provider } from 'provider';
import TotalExpense from 'components/TotalExpense';
import ExpenseList from 'components/ExpenseList';
import AddExpense from 'components/AddExpense';

function App() {
  return (
    <Provider>
      <>
        <TotalExpense />
        <ExpenseList />
        <AddExpense />
      </>
    </Provider>
    );
}

export default App;
