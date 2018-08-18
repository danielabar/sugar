import React, { Component } from 'react'
import Bar from './bar';
import './bar-chart.css';
import { toPercentage } from '../../lib/formatter';

class BarChart extends Component {
  render() {
    return (
      <div className="bar-chart">
        <Bar icon="female" percentDisplay={toPercentage(this.props.femaleFraction)}/>
        <Bar icon="male" percentDisplay={toPercentage(this.props.maleFraction)}/>
      </div>
    )
  }
}

export default BarChart;
