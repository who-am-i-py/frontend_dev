import React, { Component } from "react";
import BlogToolkit from "./BlogToolkit";

class MyBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMessage: false,
    };
  }
  handelShowMessage = () => {
    this.setState({ showMessage: true });
  };
  handelHideMessage = () => {
    this.setState({ showMessage: false });
  };
  render() {
    return (
      <div>
        <h1>Hello world this blog page</h1>
        <p>
          Lorem esse ipsum aute ea quis labore proident id Lorem veniam cillum
          id reprehenderit. Voluptate cillum veniam et tempor velit nulla Lorem.
          Lorem esse eu irure velit. Elit duis laboris magna officia do. Sit sit
          aliquip in ipsum nulla. Et et aliquip culpa pariatur veniam aliqua
          enim irure consectetur occaecat.
        </p>

        <button className="btn btn-primary" onClick={this.handelShowMessage}>
          Show toolkit
        </button>
        {this.state.showMessage ? (
          <BlogToolkit onClose={this.handelHideMessage}>
            <p>
              Deserunt tempor proident enim culpa culpa laborum nulla laborum ex
              dolore velit. Anim cillum velit elit duis veniam occaecat
              adipisicing anim. Cupidatat fugiat tempor cupidatat ullamco nulla
              ad eiusmod veniam ad non ea proident sint. Voluptate enim fugiat
              tempor nostrud. Esse quis minim eiusmod quis do esse fugiat aliqua
              minim commodo nisi nostrud deserunt. Eiusmod fugiat adipisicing
              qui qui eu in nostrud cupidatat.
            </p>
          </BlogToolkit>
        ) : null}
      </div>
    );
  }
}
export default MyBlog;
