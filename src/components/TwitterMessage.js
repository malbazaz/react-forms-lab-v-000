import React from "react";

class TwitterMessage extends React.Component {
  constructor(maxChars) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" />
      </div>
    );
  }
}

export default TwitterMessage;
