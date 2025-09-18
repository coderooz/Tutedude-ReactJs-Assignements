import React from "react";

class Heading extends React.Component {
  render() {
    return (
      <div className="card heading-card" role="banner" aria-label="Assignment heading">
        <h1 className="heading-title">Assignment-2 Counter Application</h1>
        <p className="heading-sub">React — Class component + Function component</p>
      </div>
    );
  }
}

export default Heading;
