import React, { Component } from "react";
import "./ClockFunction.css";

export default class ClockFunction extends Component {
  constructor() {
    super();
    this.state = { time: new Date() }; // initialise the state
  }

  componentDidMount() {
    // create the interval once component is mounted
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000); // every 1 seconds
  }

  componentWillUnmount() {
    // delete the interval just before component is removed
    clearInterval(this.update);
  }

  render() {
    const { time } = this.state; // retrieve the time from state

    return (
      <div>
        <h2 className="clock">{time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
