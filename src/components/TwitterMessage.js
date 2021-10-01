import React from "react";


//this component takes one prop: maxChars which is a number(maximum number of characters a message can have)
//this prop is being passed in from the App component with value 280
class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
