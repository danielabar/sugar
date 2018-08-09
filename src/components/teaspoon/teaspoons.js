import React, { Component } from 'react';
import Teaspoon from './teaspoon';
import './teaspoons.css';

class Teaspoons extends Component {

  helper() {
    let result = [];
    for (let i = 0; i < this.props.wholeTsp; i++) {
      result.push(<Teaspoon key={i.toString()} scale={1}/>);
    }
    if (this.props.fractionalTsp && this.props.fractionalTsp > 0) {
      result.push(<Teaspoon key={this.props.fractionalTsp.toString()} scale={this.props.fractionalTsp}/>);
    }
    return result;
  }

  render() {
    return (
      <div className="teaspoons">
        {this.helper()}
      </div>
    )
  }
}

export default Teaspoons;
