import React, { Component } from "react";
import "./SortingVisualizer.css";

const BAR_COLOR = "pink";

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 150; i++) {
      array.push(randomNumber(5, 700));
    }
    this.setState({ array });
  }
  render() {
    const { array } = this.state;
    return (
      //overall array container
      //map into individual bars
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ backgroundColor: BAR_COLOR, height: `${value}px` }}
          ></div>
        ))}
      </div>
    );
  }
}

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
