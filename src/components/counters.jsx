import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  handleOnDelete = counterId => {};
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleOnDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
