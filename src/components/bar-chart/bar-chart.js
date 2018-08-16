import React, { Component } from 'react'
import Bar from './bar';
import './bar-chart.css';

class BarChart extends Component {
  render() {
    return (
      <div className="bar-chart">
        <Bar />
        <Bar />
      </div>
    )
  }
}

export default BarChart;
