import React from "react";

class TwitterMessage extends React.Component {
  constructor(maxChars) {
    super(maxChars);

    this.state = {
      value: ''
    };
  }
    handleChange = event => {
      this.setState({
        value: event.target.value
      })
    }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form onSubmit={event => this.handleSubmit(event)}
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default TwitterMessage;
