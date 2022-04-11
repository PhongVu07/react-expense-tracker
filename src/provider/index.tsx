import React, { createContext, useContext, useReducer } from 'react';
import { ActionType } from '../constants';
import { IAction, IState } from '../types';
import AppReducer from './AppReducer';

const initialState: IState = {
  expenses: []
};

export const GlobalContext = createContext<{state: IState, dispatch: React.Dispatch<IAction>}>({state: initialState, dispatch: () => undefined});

export const useStore = () => {
  const store = useContext(GlobalContext);
  return store;
}

export const Provider = ({ children }: { children: React.ReactChild}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id: string) => {
    dispatch({ type: ActionType.DELETE, payload: {id} });
  };

  const addExpenses = (expenseName: string, amount: number) => {
    dispatch({ type: ActionType.ADD, payload: {expenseName, amount}});
  };

  return (
    <GlobalContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
