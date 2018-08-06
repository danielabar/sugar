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
      </div>
    )
  }
}

export default DataEntry;
