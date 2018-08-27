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

  render() {
    return (
      <div className="data-entry">
        <div className="data-entry__row">
          <label className="data-entry__label" htmlFor="grams_sugar">Total Sugars</label>
          <input
            id="grams_sugar"
            type="number"
            className="data-entry__input"
            value={this.state.grams}
            onChange={this.updateGrams.bind(this)}
          />
          <span className="data-entry__units">grams</span>
        </div>
        <div className="data-entry__actions">
          <button className="data-entry__btn data-entry__btn__primary data-entry__spacer" onClick={this.onSubmit.bind(this)}>Show me</button>
          <button className="data-entry__btn" onClick={this.onReset.bind(this)}>Reset</button>
        </div>
      </div>
    )
  }
}

export default DataEntry;
