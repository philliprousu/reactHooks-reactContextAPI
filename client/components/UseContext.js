import React, { useContext } from 'react';
import { wordContext } from '../state';

const UseContext = () => {
  const { word, alert, updateWord } = useContext(wordContext);
  return (
  <p onClick={() => { updateWord(); alert();  }}>{word}</p>
  )
};

export default UseContext;