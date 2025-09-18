import React, { useState } from "react";

export default function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(0, prev - 1));
  const reset = () => setCount(0);

  return (
    <div className="card counter-card">
      <h2>Function Counter</h2>
      <div className="counter-value">{count}</div>
      <div className="controls">
        <button className="btn danger" onClick={decrement} disabled={count === 0}>-</button>
        <button className="btn primary" onClick={increment}>+</button>
        <button className="btn muted" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
