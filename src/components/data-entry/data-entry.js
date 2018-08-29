import React, { Component } from 'react';
import './data-entry.css';

class DataEntry extends Component {
  state = {
    grams: ''
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.calculate(this.state.grams);
  }

  updateGrams(e) {
    this.setState({
      grams: e.target.value
    })
  }

  onReset() {
    this.setState({
      grams: ''
    });
    this.props.onReset();
  }

  // should delegate logic to lib/validator.js
  // need "dirty checking" - do not validate until user has interacted with element
  // alos need to disable SHOW ME button
  validate(grams) {
    let result = {};
    const intGrams = parseInt(grams, 10);
    if (!Number.isInteger(intGrams) || intGrams < 1 || intGrams > 50) {
      result = {
        grams: { hasError: true, message: 'Please enter a number between 1 and 50'}
      }
    }
    return result;
  }

  render() {
    const errors = this.validate(this.state.grams);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div className="data-entry">
        <div className="data-entry__row">
          <label className="data-entry__label" htmlFor="grams_sugar">Total Sugars</label>
          <input
            id="grams_sugar"
            type="number"
            className={errors.grams ? "data-entry__input error" : "data-entry__input"}
            value={this.state.grams}
            onChange={this.updateGrams.bind(this)}
          />
          <span className="data-entry__units">grams</span>
        </div>
        <div className="data-entry__actions">
          <button disabled={isDisabled} className="data-entry__btn data-entry__btn__primary data-entry__spacer" onClick={this.onSubmit.bind(this)}>Show me</button>
          <button className="data-entry__btn" onClick={this.onReset.bind(this)}>Reset</button>
        </div>
      </div>
    )
  }
}

export default DataEntry;
