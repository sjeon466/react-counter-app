import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.state.counters.map(counter => (
          // setting props.
          <Counter
            key={counter.id}
            value={counter.value}
            counter={counter}
            /*            id={counter.id}*/
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }

  handleIncrement = counter => {
    /*   const counters = this.state.counters.map( counter => {
      if (counter.id === c.id) counter.value++;
    });
 */
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
    //console.log(counter);
    /*   this.setState({
      counters : 
    }) */
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

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
