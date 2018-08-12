import React, { Component } from 'react';
import './data-entry.css';

class DataEntry extends Component {
  state = {
    inputValue: ''
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.calculate(this.state.inputValue);
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  onReset() {
    this.setState({
      inputValue: ''
    });
    this.props.onReset();
  }

  render() {
    return (
      <div className="data-entry">
        <label className="data-entry__label" htmlFor="grams_sugar">Total Sugars</label>
        <input
          id="grams_sugar"
          type="number"
          className="data-entry__input"
          value={this.state.inputValue}
          onChange={this.updateInputValue.bind(this)}
        />
        <span className="data-entry__units">grams</span>
        <div className="data-entry__actions">
          <button className="data-entry__btn data-entry__spacer" onClick={this.onSubmit.bind(this)}>Show me</button>
          <button className="data-entry__btn" onClick={this.onReset.bind(this)}>Reset</button>
        </div>
      </div>
    )
  }
}

export default DataEntry;
