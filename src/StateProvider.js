import { createContext, useContext, useReducer } from "react";

//this is data layer
export const StateContext = createContext();

//BUILD the provider wraps entire app inside of the app so we can use the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we use it inside of our components
export const useStateValue = () => useContext(StateContext);
