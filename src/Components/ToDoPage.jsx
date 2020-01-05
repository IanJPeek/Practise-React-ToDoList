import React, { Component } from 'react';
import ToDoList from "./ToDoList";

class ToDoPage extends Component {
  state = {
    toDoArray: ["Create React App", "Feel smug"]
  };

  render() {
    return (
      <div>
        <ToDoList toDoArray={this.state.toDoArray}></ToDoList>
      </div>
    );
  }

}

export default ToDoPage;