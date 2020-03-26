import React, { createContext, useReducer } from 'react';

export const UseReducerContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return {count: state.count + 1};
      break;
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [ state, dispatch ] = useReducer(reducer, {count: 1});
  return (
    <UseReducerContext.Provider value={{...state, dispatch}}>
      {props.children}
    </UseReducerContext.Provider>
  )
};

export default UseReducer;