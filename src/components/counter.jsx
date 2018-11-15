import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: []
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //onClick={this.handleIncrement}
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    //if (this.state.tags.length === 0) return <p>there are no tags</p>;
    return (
      <ul>
        {" "}
        {this.state.tags.map(tag => (
          <li key={tag}>tag</li>
        ))}{" "}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  /*   constructor() {
    super();
    //console.log("constructor", this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
 */

  handleIncrement = () => {
    console.log("increment clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  formatCount() {
    if (this.state.value === 0) return "ZERO";
    return this.state.value;
  }
}
export default Counter;
