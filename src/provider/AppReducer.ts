import { v4 as uuidv4 } from 'uuid';
import { IAction, IState } from "types";

export default (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'delete': {
      console.log(state);
      return state;
    }
    case 'add': {
      const newExpenses = state.expenses.slice();
      newExpenses.push({
        id: uuidv4(),
        expenseName: action.payload.expenseName,
        amount: Number(action.payload.amount)
      });
      return { expenses: newExpenses };
    }
    default:
      return state;
  }
};
