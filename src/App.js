import React, { Component } from "react";
import {
  UpdateArrayOfObject,
  UpdateNestedObject,
  UpdateObjectByKey
} from "./Components";

class App extends Component {
  render() {
    return (
      <div>
        {/* <UpdateArrayOfObject /> */}
        {/* <UpdateNestedObject /> */}
        <UpdateObjectByKey />
      </div>
    );
  }
}
export default App;
