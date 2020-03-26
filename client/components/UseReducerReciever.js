import React, { createContext, useContext } from 'react';
import { UseReducerContext } from './UseReducer';

const UseReducerReciever = () => {
  const { count, dispatch } = useContext(UseReducerContext);
  return (
    <div onClick={() => dispatch({type: 'ADD_ONE' })}>
      The count is {count}
    </div>
  )
};

export default UseReducerReciever;