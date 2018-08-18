import React, { Component } from 'react';
import './App.css';
import Header from './header';
import DataEntry from '../data-entry/data-entry';
import Message from '../message/message';
import Teaspoons from '../teaspoon/teaspoons';
import BarChart from '../bar-chart/bar-chart';
import { toTeaspoons, percentageRecommended } from '../../lib/calculator';

class App extends Component {
  state = {
    tsp: 0,
    wholeTsp: 0,
    fractionalTsp: 0
  }

  calculate(grams) {
    const numTsp = toTeaspoons(grams);
    const perRecom = percentageRecommended(grams);
    this.setState({
      tsp: numTsp.divide,
      wholeTsp: numTsp.whole,
      fractionalTsp: numTsp.fraction,
      femaleFraction: perRecom.female,
      maleFraction: perRecom.male
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
        <Header />
        <DataEntry calculate={this.calculate.bind(this)} onReset={this.onReset.bind(this)}/>
        {this.renderMessage()}
        <Teaspoons wholeTsp={this.state.wholeTsp} fractionalTsp={this.state.fractionalTsp} />
        <BarChart femaleFraction={this.state.femaleFraction} maleFraction={this.state.maleFraction} />
      </div>
    );
  }
}

export default App;
