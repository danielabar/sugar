import React, { Component } from 'react';
import './App.css';
import DataEntry from '../data-entry/data-entry';
import Message from '../message/message';
import Teaspoons from '../teaspoon/teaspoons';
import {toTeaspoons} from '../../lib/calculator';

class App extends Component {
  state = {
    numTsp: 0
  }

  calculate(input) {
    const numTsp = toTeaspoons(input);
    this.setState({numTsp});
  }

  render() {
    return (
      <div className="app">
        <DataEntry calculate={this.calculate.bind(this)} />
        <Message numTsp={this.state.numTsp} />
        <Teaspoons numTsp={this.state.numTsp} />
      </div>
    );
  }
}

export default App;
