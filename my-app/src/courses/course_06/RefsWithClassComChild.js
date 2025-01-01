import React, { Component } from "react";

class RefsWithClassComChild extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  inputFocus = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <h1>Ref with class component</h1>
        <input ref={this.inputRef} className="form-control" />
      </div>
    );
  }
}

export default RefsWithClassComChild;
