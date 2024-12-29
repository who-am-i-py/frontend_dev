import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  componentDidMount = () => {
    console.log(this.inputRef);
    setTimeout(() => this.inputRef.current.focus(), 2000);
  };
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <h2 className="my-3">RefDemo Course</h2>
        <input className="form-control" ref={this.inputRef} />
        <button className="btn btn-primary my-3" onClick={this.clickHandler}>
          Click here
        </button>
      </div>
    );
  }
}

export default RefDemo;
