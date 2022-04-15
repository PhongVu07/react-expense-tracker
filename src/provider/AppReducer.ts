import { v4 as uuidv4 } from 'uuid';
import { IAction, IState } from "types";
import { saveToLocalStorage } from 'utils/storage';
import { LocalStorageDataName } from '../constants';

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'delete': {
      const newExpenses = state.expenses.filter(({ id }) => id !== action.payload.id);
      saveToLocalStorage(LocalStorageDataName.EXPENSES, newExpenses)
      return {...state, expenses: newExpenses};
    }
    case 'add': {
      const { expenseName, amount, date, type } = action.payload;

      const newExpenses = state.expenses.slice();
      newExpenses.push({
        id: uuidv4(),
        expenseName,
        amount,
        date,
        type
      });

      const newExpenseTypes = state.expenseTypes.slice()
      if (!newExpenseTypes.some(expenseType => expenseType === type)) {
        newExpenseTypes.push(type)
      }

      saveToLocalStorage(LocalStorageDataName.EXPENSES, newExpenses)
      saveToLocalStorage(LocalStorageDataName.EXPENSE_TYPE, newExpenseTypes)
      return { expenses: newExpenses, expenseTypes: newExpenseTypes };
    }
    default:
      return state;
  }
};

export default reducer
