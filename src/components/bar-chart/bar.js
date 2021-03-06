import React, { Component } from 'react';
import './bar.css';

const ANIMATION_DELAY_MS = 150;

class Bar extends Component {
  constructor(props) {
    super(props);
    this.barInnerRef = React.createRef();
  }

  barStyle() {
    return {
      width: this.props.percentDisplay
    };
  }

  femaleIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 502.479 502.479">
        <g data-test="female-icon">
          <g>
            <path d="M251.239,127.907c17.705,0,32.783-6.232,45.253-18.7c12.474-12.467,18.699-27.554,18.699-45.253
              c0-17.705-6.226-32.783-18.699-45.255C284.022,6.233,268.938,0,251.239,0c-17.704,0-32.789,6.23-45.254,18.699
              s-18.699,27.55-18.699,45.255c0,17.703,6.23,32.789,18.699,45.253C218.454,121.671,233.535,127.907,251.239,127.907z"/>
            <path d="M429.396,277.222l-73.087-109.634c-13.895-20.367-30.643-30.55-50.251-30.55H196.422
              c-19.603,0-36.354,10.183-50.248,30.55L73.085,277.222c-3.046,4.565-4.57,9.616-4.57,15.133c0,7.611,2.664,14.086,7.994,19.411
              c5.33,5.331,11.801,7.994,19.414,7.994c9.706,0,17.321-4.093,22.84-12.279l64.809-97.354h12.851v37.685l-70.521,117.339
              c-1.713,2.854-2.568,5.995-2.568,9.421c0,4.952,1.809,9.229,5.424,12.851c3.617,3.613,7.898,5.42,12.847,5.42h54.814v77.659
              c0,8.758,3.137,16.279,9.42,22.556c6.283,6.283,13.8,9.421,22.557,9.421h45.679c8.761,0,16.278-3.138,22.562-9.421
              c6.276-6.283,9.418-13.798,9.418-22.556v-77.659h54.823c4.945,0,9.227-1.807,12.847-5.42c3.614-3.621,5.421-7.898,5.421-12.851
              c0-3.426-0.855-6.567-2.563-9.421l-70.523-117.339v-37.685h12.854l64.809,97.36c5.521,8.18,13.131,12.272,22.843,12.272
              c7.611,0,14.079-2.663,19.407-7.991s7.994-11.796,7.994-19.41C433.964,286.838,432.441,281.794,429.396,277.222z"/>
          </g>
        </g>
      </svg>
    );
  }

  maleIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 53.545 53.545">
        <g data-test="male-icon">
          <circle cx="26.686" cy="4.507" r="4.507"/>
          <path className="bar__icon__path" d="M28.256,11.163c-1.123-0.228-2.344-0.218-3.447,0.042c-7.493,0.878-9.926,9.551-9.239,16.164
            c0.298,2.859,4.805,2.889,4.504,0c-0.25-2.41-0.143-6.047,1.138-8.632c0,3.142,0,6.284,0,9.425c0,0.111,0.011,0.215,0.016,0.322
            c-0.003,0.051-0.015,0.094-0.015,0.146c0,7.479-0.013,14.955-0.322,22.428c-0.137,3.322,5.014,3.309,5.15,0
            c0.242-5.857,0.303-11.717,0.317-17.578c0.244,0.016,0.488,0.016,0.732,0.002c0.015,5.861,0.074,11.721,0.314,17.576
            c0.137,3.309,5.288,3.322,5.15,0c-0.309-7.473-0.32-14.949-0.32-22.428c0-0.232-0.031-0.443-0.078-0.646
            c-0.007-3.247-0.131-6.497-0.093-9.742c1.534,2.597,1.674,6.558,1.408,9.125c-0.302,2.887,4.206,2.858,4.504,0
            C38.678,20.617,36.128,11.719,28.256,11.163z"/>
        </g>
      </svg>
    );
  }

  getIcon() {
    return this.props.icon === 'female' ? this.femaleIcon() : this.maleIcon();
  }

  animate() {
    this.barInnerRef.current.className += ' bar__inner-to-full-size';
  }

  componentDidMount() {
    setTimeout(this.animate.bind(this), ANIMATION_DELAY_MS * this.props.numTsp);
  }

  render() {
    return (
      <div className="bar">
        <div className="bar__container">
          <div className="bar__inner" ref={this.barInnerRef} style={this.barStyle()} data-test="bar-inner">
          </div>
          <span className="bar__label" data-test="bar-label">{this.props.percentDisplay}</span>
        </div>
        <div className="bar__icon">
          {this.getIcon()}
        </div>
        <div className="bar__axis">
          <div className="bar__axis__label bar__axis__left">0</div>
          <div className="bar__axis__label bar__axis__right">max {this.props.maxGrams} g</div>
        </div>
      </div>
    )
  }
}

export default Bar;
