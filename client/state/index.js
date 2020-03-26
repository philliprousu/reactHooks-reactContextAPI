import React, { Component, createContext } from 'react';
export const wordContext = createContext();

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'heres the state'
    }
    this.alert = () => alert('hi');
    this.updateWord = () => { this.setState( {word: 'NEW STATE'} )}
  }

  render() {
    return (
      <wordContext.Provider value={{...this.state, alert: this.alert, updateWord: this.updateWord}}>
        {this.props.children}
      </wordContext.Provider>
    );
  }
}

export default State;