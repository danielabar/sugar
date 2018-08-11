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
        <label className="label" htmlFor="grams_sugar">Total Sugars</label>
        <input
          id="grams_sugar"
          type="number"
          className="input"
          value={this.state.inputValue}
          onChange={this.updateInputValue.bind(this)}
        />
        <span className="units">grams</span>
        <div className="actions">
          <button onClick={this.onSubmit.bind(this)}>Show me</button>
          <button onClick={this.onReset.bind(this)}>Reset</button>
        </div>
      </div>
    )
  }
}

export default DataEntry;
