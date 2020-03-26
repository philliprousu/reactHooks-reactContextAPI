import React from 'react';
import { wordContext } from '../state';

const RecieveStateFunction = () => {

  return (
    <wordContext.Consumer>{
      (({ word, alert }) => <p onClick={alert}>{ word } from a functional component</p>)
    }</wordContext.Consumer>
  )
};

export default RecieveStateFunction;