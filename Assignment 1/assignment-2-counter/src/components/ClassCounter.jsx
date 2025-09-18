import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  decrement = () => {
    this.setState((prev) => ({ count: prev.count > 0 ? prev.count - 1 : 0 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="card counter-card">
        <h2>Class Counter</h2>
        <div className="counter-value">{this.state.count}</div>
        <div className="controls">
          <button className="btn danger" onClick={this.decrement} disabled={this.state.count === 0}>-</button>
          <button className="btn primary" onClick={this.increment}>+</button>
          <button className="btn muted" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
