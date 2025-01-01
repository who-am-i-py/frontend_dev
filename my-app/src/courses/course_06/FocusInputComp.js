import React, { Component } from "react";
import RefsWithClassComChild from "./RefsWithClassComChild";

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.mkRef = React.createRef();
  }
  clickHandler = () => {
    this.mkRef.current.inputFocus();
  };
  render() {
    return (
      <div>
        <RefsWithClassComChild ref={this.mkRef} />
        <button className="btn btn-warning my-3" onClick={this.clickHandler}>
          Click to focus
        </button>
      </div>
    );
  }
}

export default FocusInput;
