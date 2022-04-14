import React from "react";
import "./App.css";
import { Provider } from "provider";
import TotalExpense from "components/TotalExpense";
import ExpenseList from "components/ExpenseList";
import AddExpense from "components/AddExpense";
import Layout from "components/Layout";

function App() {
  return (
    <Provider>
      <Layout>
        <>
          <h1>Awesome Expense Tracker</h1>
          <AddExpense />
          <TotalExpense />
          <ExpenseList />
        </>
      </Layout>
    </Provider>
  );
}

export default App;
