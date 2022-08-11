import React, {useContext,useReducer,createContext, Children} from "react";
import { initialState } from "./reducer";

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) =>(
 <StateContext.Provider value={useReducer(reducer,initialState)}>{children}</StateContext.Provider>
 )

 export const useStateValue = () => useContext(StateContext);  