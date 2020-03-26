import React, { Component } from 'react';
import State from '../state';
import RecieveStateClass from './RecieveStateClass';
import RecieveStateFunction from './RecieveStateFunction';
import UseReducer from './UseReducer';
import UseReducerReciever from './UseReducerReciever'
import UseContext from './UseContext';
import style from '../CSS/app.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        <State>
          <RecieveStateClass></RecieveStateClass>
          <RecieveStateFunction></RecieveStateFunction>
          <UseContext></UseContext>
        </State>
        <UseReducer >
          <UseReducerReciever />
        </UseReducer>
      </React.Fragment>
    );
  }
}

export default App;