import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //console.log("Counters - Rendered");
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {counters.map(counter => (
          // setting props.
          <Counter
            key={counter.id}
            value={counter.value}
            counter={counter}
            /*            id={counter.id}*/
            onDelete={onDelete}
            // onReset={this.handleReset}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
