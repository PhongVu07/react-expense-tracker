import React from 'react'
import { useStore } from "provider";
import { IExpense } from "types";

const TotalExpense = () => {
  const {
    state: { expenses },
  } = useStore();
  const totalExpenses = expenses.reduce(
    (total: number, expense: IExpense) => (total += expense.amount),
    0
  );

  return <>Total expense: {totalExpenses}</>;
}
export default TotalExpense
