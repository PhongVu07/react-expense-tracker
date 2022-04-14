import React from 'react'
import { useStore } from "provider";
import { IExpense } from "types";
import { ComponentContainer } from "./totalExpense.style";

const TotalExpense = () => {
  const {
    state: { expenses },
  } = useStore();
  const totalExpenses = expenses.reduce(
    (total: number, expense: IExpense) => (total += expense.amount),
    0
  );

  return (
    <ComponentContainer>
      <h1>Awesome Expense Tracker</h1>
      <div>
        Total expense: <span>${totalExpenses}</span>
      </div>
    </ComponentContainer>
  );
}
export default TotalExpense
