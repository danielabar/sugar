import React, { Component } from 'react';
import './message.css';

class Message extends Component {

  render() {
    return (
      <div className="message">
        {this.props.display}
      </div>
    )
  }
}

export default Message;
