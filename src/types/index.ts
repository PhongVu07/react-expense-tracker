import { ActionType } from "../constants";

export interface IExpense {
    id?: string
    expenseName: string
    amount: number
}

export interface IAddExpense {
    type: ActionType.ADD
    payload: IExpense
}

export interface IDeleteExpense {
    type: ActionType.DELETE,
    payload: {
        id: string
    }
}

export type IAction = IAddExpense | IDeleteExpense

export interface IState {
    expenses: IExpense[],
}
