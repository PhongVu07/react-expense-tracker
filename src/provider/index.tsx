import React, { createContext, useContext, useReducer } from "react";
import { IAction, IState } from "types";
import { getFromLocalStorage } from "utils/storage";
import { LocalStorageDataName } from "../constants";
import AppReducer from "./AppReducer";

const initialState: IState = {
  expenses: getFromLocalStorage(LocalStorageDataName.EXPENSES),
  expenseTypes: getFromLocalStorage(LocalStorageDataName.EXPENSE_TYPE),
};

export const GlobalContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<IAction>;
}>({ state: initialState, dispatch: () => undefined });

export const useStore = () => {
  const store = useContext(GlobalContext);
  return store;
};

export const Provider = ({ children }: { children: React.ReactChild }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
