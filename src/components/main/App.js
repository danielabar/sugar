import React, { Component } from 'react';
import './App.css';
import Header from './header';
import DataEntry from '../data-entry/data-entry';
import Message from '../message/message';
import Teaspoons from '../teaspoon/teaspoons';
import BarChart from '../bar-chart/bar-chart';
import { toTeaspoons, percentageRecommended, generateMessage } from '../../lib/calculator';

class App extends Component {
  state = {
    tsp: 0,
    wholeTsp: 0,
    fractionalTsp: 0,
    tspMessage: '',
    femaleFraction: 0,
    maleFraction: 0
  }

  calculate(grams) {
    const numTsp = toTeaspoons(grams);
    const perRecom = percentageRecommended(grams);
    this.setState({
      tsp: numTsp.divide,
      wholeTsp: numTsp.whole,
      fractionalTsp: numTsp.fraction,
      tspMessage: generateMessage(numTsp.divide),
      femaleFraction: perRecom.female,
      maleFraction: perRecom.male
    });
  }

  renderTspMessage() {
    if (this.state.tsp !== 0) {
      return (
        <Message display={this.state.tspMessage} />
      )
    }
    return null;
  }

  renderBarChartMessage() {
    if (this.state.tsp !== 0) {
      return (
        <Message display="Percentage of daily recommended intake" />
      )
    }
    return null;
  }

  renderBarChart() {
    if (this.state.femaleFraction !== 0) {
      return (
        <BarChart femaleFraction={this.state.femaleFraction} maleFraction={this.state.maleFraction} />
      )
    }
    return null;
  }

  onReset() {
    this.setState({
      tsp: 0,
      wholeTsp: 0,
      fractionalTsp: 0,
      tspMessage: '',
      femaleFraction: 0,
      maleFraction: 0
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <DataEntry calculate={this.calculate.bind(this)} onReset={this.onReset.bind(this)}/>
        {this.renderTspMessage()}
        <Teaspoons wholeTsp={this.state.wholeTsp} fractionalTsp={this.state.fractionalTsp} />
        {this.renderBarChartMessage()}
        {this.renderBarChart()}
      </div>
    );
  }
}

export default App;
