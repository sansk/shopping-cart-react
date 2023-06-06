import { createContext, useContext, useReducer, useEffect } from "react";
import { reducerFn } from "./reducer";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  cart: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
