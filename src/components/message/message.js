import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message">
        That's {this.props.numTsp} teaspoons!
      </div>
    )
  }
}

export default Message;
