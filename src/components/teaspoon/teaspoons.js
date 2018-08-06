import React, { Component } from 'react';
import Teaspoon from './teaspoon';

class Teaspoons extends Component {

  helper() {
    let result = [];
    for (let i = 0; i < this.props.numTsp; i++) {
      result.push(<Teaspoon key={i.toString()}/>);
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