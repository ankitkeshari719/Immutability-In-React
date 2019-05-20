import React, { Component } from "react";
import {
  UpdateArrayOfObject,
  UpdateNestedObject,
  UpdateObjectByKey,
  AddElementToArray
} from "./Components";

class App extends Component {
  render() {
    return (
      <div>
        {/* <UpdateArrayOfObject /> */}
        {/* <UpdateNestedObject /> */}
        {/* <UpdateObjectByKey /> */}
        <AddElementToArray />
      </div>
    );
  }
}
export default App;
