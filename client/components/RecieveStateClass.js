import React, { Component } from 'react';
import { wordContext } from '../state';



class RecieveStateClass extends Component {

  static contextType = wordContext;

  render() {
    const { word, updateWord } = this.context;
    return (
      <p onClick={ updateWord }>{ word } from a class component</p>
    )
  }
}

export default RecieveStateClass;