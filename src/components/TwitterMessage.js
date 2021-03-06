import React from "react";
import PropTypes from "prop-types";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''}
  }

  setMessage = (event) => {
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>Your message:</h1>
        <input
          type="text"
          value={this.state.message}
          onChange={this.setMessage}
        />
        <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

TwitterMessage.PropTypes = {
  maxChars: PropTypes.number
}

TwitterMessage.defaultProps = {
  maxChars: 140,
};

export default TwitterMessage;
