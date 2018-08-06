import React, { Component } from 'react';
import './App.css';
import DataEntry from '../data-entry/data-entry';
import Message from '../message/message';
import Teaspoons from '../teaspoon/teaspoons';
import {toTeaspoons} from '../../lib/calculator';
import {toTeaspoons2} from '../../lib/calculator';

class App extends Component {
  state = {
    numTsp: 0,
    wholeTsp: 0,
    fractionalTsp: 0
  }

  calculate(input) {
    const numTsp = toTeaspoons(input);
    this.setState({numTsp});
    const numTsp2 = toTeaspoons2(input);
    this.setState({
      wholeTsp: numTsp2.whole,
      fractionalTsp: numTsp2.fraction
    });
  }

  render() {
    return (
      <div className="app">
        <DataEntry calculate={this.calculate.bind(this)} />
        <Message numTsp={this.state.numTsp} />
        <Teaspoons wholeTsp={this.state.wholeTsp} fractionalTsp={this.state.fractionalTsp} numTsp={this.state.numTsp} />
      </div>
    );
  }
}

export default App;
