import React, { Component } from "react";
import ReactDom from "react-dom";
import styles from "./style.module.css";
const portalRoot = document.getElementById("modal-root");
export class BlogToolkit extends Component {
  render() {
    return ReactDom.createPortal(
      <div className={styles.toolkitOverlay}>
        <div className={styles.toolkitContainer}>
          {this.props.children}
          <button className="btn btn-warning" onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </div>,
      portalRoot
    );
  }
}
export default BlogToolkit;
