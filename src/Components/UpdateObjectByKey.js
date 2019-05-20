import React, { Component } from "react";

export default class UpdateObjectByKey extends Component {
  state = {
    houses: {
      gryffindor: {
        points: 15,
        data: "yes",
        myObject: {
          flag: true
        }
      },
      ravenclaw: {
        points: 18,
        data: "yes",
        myObject: {
          flag: true
        }
      },
      hufflepuff: {
        points: 7,
        data: "yes",
        myObject: {
          flag: true
        }
      },
      slytherin: {
        points: 5,
        data: "yes",
        myObject: {
          flag: true
        }
      }
    }
  };

  /**
   * Add 3 points to Ravenclaw,
   * Change Data to "No"
   * Change flag to false
   * when the name is stored in a variable
   */
  updateObjectByKeyHandler = key => {
    let newHouse = {
      ...this.state,
      houses: {
        ...this.state.houses,
        [key]: {
          ...this.state.houses[key],
          points: this.state.houses[key].points + 3,
          data: "No",
          myObject: {
            ...this.state.houses[key].myObject,
            flag: false
          }
        }
      }
    };
    this.setState({ houses: newHouse });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={() => this.updateObjectByKeyHandler("ravenclaw")}>
          Update Object By Key
        </button>
      </div>
    );
  }
}
