import React, { Component } from 'react';
import State from '../state';
import RecieveStateClass from './RecieveStateClass';
import RecieveStateFunction from './RecieveStateFunction';
import UseContext from './UseContext';
import style from '../CSS/app.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <State>
        <RecieveStateClass></RecieveStateClass>
        <RecieveStateFunction></RecieveStateFunction>
        <UseContext></UseContext>
      </State>
    );
  }
}

export default App;