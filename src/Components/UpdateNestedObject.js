import React, { Component } from "react";

export default class UpdateNestedObject extends Component {
  state = {
    liz: {
      name: "Liz",
      age: 32,
      location: {
        city: "Portland",
        state: "Oregon"
      },
      pets: [{ type: "cat", name: "Redux" }]
    },
    flag: true
  };

  /**
   * Update Simple Object
   */
  updateSimpleObjectDatahandler = () => {
    this.setState({ flag: !this.state.flag });
  };

  /**
   * Update One Level Nested Object
   */
  updateOneLevelNestedDatahandler = () => {
    let newLiz = {
      ...this.state,
      liz: {
        ...this.state.liz,
        age: 34
      }
    };
    this.setState({ liz: newLiz });
  };

  /**
   * Update two Level Nested Object
   */
  updateTwoLevelNestedDatahandler = () => {
    let newLiz = {
      ...this.state,
      liz: {
        ...this.state.liz,
        location: {
          ...this.state.liz.location,
          city: "Varanasi"
        }
      }
    };
    console.log(newLiz);
    this.setState({ liz: newLiz });
  };

  render() {
    console.log("State:", this.state);

    return (
      <div>
        <button onClick={this.updateSimpleObjectDatahandler}>
          Update Simple Object Data
        </button>
        <button onClick={this.updateOneLevelNestedDatahandler}>
          Update One Level Nested Data
        </button>
        <button onClick={this.updateTwoLevelNestedDatahandler}>
          Update Two Level Nested Data
        </button>
      </div>
    );
  }
}
