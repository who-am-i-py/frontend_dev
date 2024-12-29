import React, { Component } from "react";

class RefDemoWithCallBack extends Component {
  constructor(props) {
    super(props);

    this.inputRef = null;
    this.setInputRef = (element) => {
      this.inputRef = element;
    };
  }
  componentDidMount = () => {
    if (this.inputRef) {
      setTimeout(() => this.inputRef.focus(), 2000);
    }
  };
  clickHandler = () => {
    alert(this.inputRef.value);
  };
  render() {
    return (
      <div>
        <hr />
        <h2 className="my-3">RefDemoWithCallBack Course</h2>
        <input className="form-control" ref={this.setInputRef} />
        <button className="btn btn-primary my-3" onClick={this.clickHandler}>
          Click here
        </button>
      </div>
    );
  }
}

export default RefDemoWithCallBack;
