import moment, { Moment } from 'moment';
import { IExpense } from 'types';
import { COLORS } from '../../constants';

export const handleExpenseData = (expenses: IExpense[], month: Moment) => {
  const { totalExpense, groupedData } = expenses.reduce((result: any ,expense: IExpense, i: number) => {
    if (moment(expense.date).format("MM/YYYY") === month.format("MM/YYYY")) {
      if (result.groupedData[expense.type]) {
        result.groupedData[expense.type] += expense.amount
      } else {
        result.groupedData[expense.type] = expense.amount
      }
      result.totalExpense += expense.amount
    }
    return result
  }, {
    totalExpense: 0,
    groupedData: {}
  })

  const chartData = Object.keys(groupedData).map((key, i) => ({name: key, value: groupedData[key], color: COLORS[i]}))

  return { totalExpense, chartData}
}
