import React from 'react';
import './App.css';
import { Provider } from 'provider';
import TotalExpense from 'components/TotalExpense';
import ExpenseList from 'components/ExpenseList';
import AddExpense from 'components/AddExpense';
import Layout from 'components/Layout';

function App() {
  return (
    <Provider>
      <Layout>
        <>
        <TotalExpense />
        <ExpenseList />
        <AddExpense />
        </>
      </Layout>
    </Provider>
    );
}

export default App;
