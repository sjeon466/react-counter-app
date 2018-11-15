import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
  };

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
    this.setState({ value: this.state.count + 1 });
  };

  formatCount() {
    if (this.state.value === 0) return "ZERO";
    return this.state.value;
  }

  render() {
    //console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //onClick={this.handleIncrement}
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
