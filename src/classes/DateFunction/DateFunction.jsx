import React, { Component } from "react";
import "./DateFunction.css";

export default class DateFunction extends Component {
  constructor() {
    super();
    const getDay = (dayVal) => {
      switch (dayVal) {
        case 0:
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
        default:
          return;
      }
    };

    var today = new Date(),
      date =
        getDay(today.getDay()) +
        ", " +
        today.toLocaleDateString("en-us", { month: "long" }) +
        " " +
        today.getDate();

    this.state = {
      date: date,
    };
  }

  render() {
    return (
      <div className="date">
        <h2>{this.state.date}</h2>
      </div>
    );
  }
}
