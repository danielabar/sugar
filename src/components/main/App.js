import React, { Component } from 'react';
import './App.css';
import DataEntry from '../data-entry/data-entry';
import Teaspoons from '../teaspoon/teaspoons';

const GRAMS_PER_TEASPOON = 4;

class App extends Component {
  state = {
    numTsp: 0
  }

  calculate(input) {
    // TODO deal with fractional units
    const numTsp = Math.round(input / GRAMS_PER_TEASPOON);
    this.setState({numTsp});
  }

  render() {
    return (
      <div className="app">
        <DataEntry calculate={this.calculate.bind(this)} />
        <Teaspoons numTsp={this.state.numTsp} />
      </div>
    );
  }
}

export default App;
