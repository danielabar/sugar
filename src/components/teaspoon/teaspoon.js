import React, { Component } from 'react';

const DEFAULT_WIDTH = 50;
const DEFAULT_HEIGHT = 50;

class Teaspoon extends Component {

  render() {
    return (
      <div className="teaspoon">
        <svg xmlns="http://www.w3.org/2000/svg" width={DEFAULT_WIDTH * this.props.scale} height={DEFAULT_HEIGHT * this.props.scaleT} viewBox="0 0 50 50">
            <path d="M 48.84375 5.90625 C 48.763484 5.9182031 48.7015 5.93675 48.625 5.96875 L 28.34375 14.375 C 27.03675 14.85 25.3315 15.04675 23.9375 15.21875 C 23.2555 15.30275 22.6645 15.36675 22.1875 15.46875 C 20.1205 14.95775 17.89925 14.75 15.78125 14.75 C 14.92925 14.75 12.0665 14.77925 10.9375 15.40625 C 9.5935 16.13425 7.15725 18.56475 5.40625 21.59375 C 5.39025 21.60575 5.39 21.613 5.375 21.625 C 0.633 25.557 -1.0315 29.3585 0.4375 32.8125 C 1.7295 36.8485 7.006 43.25 15.625 43.25 C 18.244 43.25 20.97075 42.62225 23.71875 41.40625 C 34.31275 36.67425 34.3125 28.08025 34.3125 24.40625 C 34.3125 23.86625 34.53025 22.0025 37.40625 20.8125 C 38.90925 20.1595 41.7145 18.99925 44.6875 17.78125 C 46.2635 17.13525 47.89275 16.4635 49.46875 15.8125 C 49.84675 15.6565 50.09875 15.285 50.09375 14.875 L 50 6.875 C 49.996 6.543 49.8385 6.2445 49.5625 6.0625 C 49.35475 5.92525 49.084547 5.8703906 48.84375 5.90625 z M 15.78125 16.75 C 20.56225 16.75 26.558 18.01125 27.75 21.53125 C 28.341 23.30425 24.98625 27.59025 18.40625 30.28125 C 15.19425 31.59525 12.13 32.3125 9.75 32.3125 C 8.228 32.3125 6.28675 32.024 5.71875 30.625 C 3.73175 25.788 9.559 18.4425 11.875 17.1875 C 12.118 17.0535 13.45225 16.75 15.78125 16.75 z M 12 23 C 11.447715 23 11 23.447715 11 24 C 11 24.552285 11.447715 25 12 25 C 12.552285 25 13 24.552285 13 24 C 13 23.447715 12.552285 23 12 23 z M 10 26 C 9.4477153 26 9 26.447715 9 27 C 9 27.552285 9.4477153 28 10 28 C 10.552285 28 11 27.552285 11 27 C 11 26.447715 10.552285 26 10 26 z M 14 26 C 13.447715 26 13 26.447715 13 27 C 13 27.552285 13.447715 28 14 28 C 14.552285 28 15 27.552285 15 27 C 15 26.447715 14.552285 26 14 26 z"/>
        </svg>
      </div>
    )
  }
}

export default Teaspoon;