import React, { Component } from "react";
import RefForwordChild from "./RefForwordChild";

class RefForwordParent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  clickHundler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <h1>Parent to children</h1>
        <RefForwordChild ref={this.inputRef} />
        <button
          onClick={this.clickHundler}
          type="button"
          className="btn btn-outline-primary"
        >
          Focus here
        </button>
      </div>
    );
  }
}

export default RefForwordParent;
