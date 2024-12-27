import React, { PureComponent } from "react";

export default class PureCompo extends PureComponent {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}, I'm PureComponent of React</h1>
      </div>
    );
  }
}
