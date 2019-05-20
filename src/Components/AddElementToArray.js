import React, { Component } from "react";

export default class AddElementToArray extends Component {
  state = {
    array_begin: [1, 2, 3],
    array_middle: [1, 2, 3],
    array_end: [1, 2, 3]
  };

  addElementToBegin = newElement => {
    let newArray = [newElement, ...this.state.array_begin];
    this.setState({ array_begin: newArray });
  };

  addElementToMiddle = (newElement, index) => {
    let newArray = [
      ...this.state.array_middle.slice(0, index),
      newElement,
      ...this.state.array_middle.slice(index)
    ];
    this.setState({ array_middle: newArray });
  };

  addElementToEnd = newElement => {
    let newArray = [...this.state.array_end, newElement];
    this.setState({ array_end: newArray });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={() => this.addElementToBegin(0)}>
          Add element to the beginning of an array
        </button>
        <button onClick={() => this.addElementToMiddle(4, 1)}>
          Add element to the middle of an array
        </button>
        <button onClick={() => this.addElementToEnd(4)}>
          Add element to the end of an array
        </button>
      </div>
    );
  }
}
