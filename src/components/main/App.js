import React, { Component } from 'react';
import './App.css';
import DataEntry from '../data-entry/data-entry';

class App extends Component {
  calculate(input) {
    console.log(`calculate: ${input}`);
  }

  render() {
    return (
      <div className="app">
        <DataEntry calculate={this.calculate}/>
      </div>
    );
  }
}

export default App;
