import React, { Component } from "react";
import "./SortingVisualizer.css";

const BAR_COLOR = "pink";
const NUMBER_OF_BARS = 210;

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
    this.resetArray = this.resetArray.bind(this);
  }

  componentDidMount() {
    this.resetArray();
  }

  // resetArray() {
  //   const array = [];
  //   for (let i = 0; i < NUMBER_OF_BARS; i++) {
  //     array.push(randomNumber(5, 650));
  //   }
  //   this.setState({ array });
  // }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      array.push(randomNumber(5, 730));
    }
    this.setState({ array });
  }

  mergeSort() {}

  render() {
    const { array } = this.state;
    const { resetArray } = this;
    return (
      //overall array container
      //map into individual bars
      <div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ backgroundColor: BAR_COLOR, height: `${value}px` }}
            ></div>
          ))}
        </div>
        <button onClick={resetArray}>Generate New Array</button>
      </div>
    );
  }
}

//random number generator
const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// function randomNumber(min, max) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
