import React, { PureComponent } from "react";

export default class PureCompo extends PureComponent {
  render() {
    console.log(
      "___________________________[Pure component ]________________________________"
    );

    return (
      <div>
        <h1 className="text-danger">
          Hello {this.props.name}, I'm PureComponent of React
        </h1>
      </div>
    );
  }
}
