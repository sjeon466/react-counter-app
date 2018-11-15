import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          // setting props.
          <Counter
            key={counter.id}
            value={counter.value}
            counter={counter}
            /*            id={counter.id}*/
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({
      counters
    });
  };
}

export default Counters;
