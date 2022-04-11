import React from 'react';
import './App.css';
import TotalExpense from 'components/TotalExpense';
import { Provider } from 'provider';

function App() {
  return (
    <Provider>
      <TotalExpense />
    </Provider>
    );
}

export default App;
