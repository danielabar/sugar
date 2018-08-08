import React, { Component } from 'react';

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
        <input
          type="number"
          value={this.state.inputValue}
          placeholder="Enter grams of sugar"
          onChange={this.updateInputValue.bind(this)}
        />
        <button onClick={this.onSubmit.bind(this)}>How many teaspoons?</button>
        <button onClick={this.onReset.bind(this)}>Reset</button>
      </div>
    )
  }
}

export default DataEntry;
