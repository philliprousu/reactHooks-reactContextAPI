import React, { createContext, useContext } from 'react';
import { UseReducerContext } from './UseReducer';

const UseReducerReciever = () => {
  const { count, dispatch } = useContext(UseReducerContext);
  return (
    <div onClick={() => dispatch({type: 'ADD_SOME', addNum: 5 })}>
      The count is {count}
    </div>
  )
};

export default UseReducerReciever;