import React, { Component } from "react";

export default class UpdateArrayOfObject extends Component {
  state = {
    data: [
      { fieldName: "title", valid: false },
      { fieldName: "description", valid: true },
      { fieldName: "cityId", valid: false },
      { fieldName: "streetId", valid: false },
      { fieldName: "hostDescription", valid: false }
    ]
  };

  /**
   * Update Object of an array of which fieldName = cityId
   */
  handleClick = () => {
    var newData = this.state.data.map(el => {
      if (el.fieldName === "cityId")
        return Object.assign({}, el, { valid: true });
      return el;
    });
    this.setState({ data: newData });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={this.handleClick}>Click Me </button>
      </div>
    );
  }
}
