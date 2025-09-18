
import React from "react";
// import Counter from "./components/Counter";
import Heading from "./components/Heading";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";

export default function App() {
  return (
    <div className="app">
      <div className="components-row">
        <Heading />
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}
