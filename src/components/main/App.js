import React, { Component } from 'react';
import './App.css';
import DataEntry from '../data-entry/data-entry';
import Message from '../message/message';
import Teaspoons from '../teaspoon/teaspoons';
import { toTeaspoons, toFraction } from '../../lib/calculator';

class App extends Component {
  state = {
    wholeTsp: 0,
    fractionalTsp: 0
  }

  calculate(input) {
    const numTsp = toTeaspoons(input);
    const displayTsp = toFraction(numTsp.divide);
    this.setState({
      wholeTsp: numTsp.whole,
      fractionalTsp: numTsp.fraction,
      displayTsp: displayTsp
    });
  }

  render() {
    return (
      <div className="app">
        <DataEntry calculate={this.calculate.bind(this)} />
        <Message numTsp={this.state.displayTsp} />
        <Teaspoons wholeTsp={this.state.wholeTsp} fractionalTsp={this.state.fractionalTsp} />
      </div>
    );
  }
}

export default App;
