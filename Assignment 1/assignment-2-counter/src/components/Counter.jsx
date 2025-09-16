import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  // Ensure count never goes below 0
  const decrement = () => setCount(prev => Math.max(0, prev - 1));
  const reset = () => setCount(0);

  return (
    <div className="card counter-card" role="group" aria-label="Counter controls">
      <div className="counter-value" aria-live="polite">{count}</div>

      <div className="controls">
        <button
          className="btn danger"
          onClick={decrement}
          disabled={count === 0}
          aria-label="Decrease"
          title={count === 0 ? "Can't go below 0" : "Decrease"}
        >
          -
        </button>

        <button className="btn primary" onClick={increment} aria-label="Increase">+</button>

        <button className="btn muted" onClick={reset} aria-label="Reset">Reset</button>
      </div>
    </div>
  );
}
