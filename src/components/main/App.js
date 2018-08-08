import React, { Component } from 'react';
import './App.css';
import DataEntry from '../data-entry/data-entry';
import Message from '../message/message';
import Teaspoons from '../teaspoon/teaspoons';
import { toTeaspoons } from '../../lib/calculator';

class App extends Component {
  state = {
    tsp: 0,
    wholeTsp: 0,
    fractionalTsp: 0
  }

  calculate(input) {
    const numTsp = toTeaspoons(input);
    this.setState({
      tsp: numTsp.divide,
      wholeTsp: numTsp.whole,
      fractionalTsp: numTsp.fraction
    });
  }

  renderMessage() {
    if (this.state.tsp !== 0) {
      return (
        <Message tsp={this.state.tsp} />
      )
    }
    return null;
  }

  onReset() {
    this.setState({
      tsp: 0,
      wholeTsp: 0,
      fractionalTsp: 0
    });
  }

  render() {
    return (
      <div className="app">
        <DataEntry calculate={this.calculate.bind(this)} onReset={this.onReset.bind(this)}/>
        {this.renderMessage()}
        <Teaspoons wholeTsp={this.state.wholeTsp} fractionalTsp={this.state.fractionalTsp} />
      </div>
    );
  }
}

export default App;
