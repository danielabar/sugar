import React, { Component } from 'react';
import { generateMessage } from '../../lib/calculator';

class Message extends Component {
  generateDisplay() {
    return generateMessage(this.props.tsp);
  }

  render() {
    return (
      <div className="message">
        {this.generateDisplay()}
      </div>
    )
  }
}

export default Message;
