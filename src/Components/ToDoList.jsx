import React, { Component } from "react";

class ToDoList extends Component {
  state = {
    toDoArray: ["Create React App", "Feel smug"]
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.toDoArray.map(toDoItem => (
            <li key={toDoItem}>{toDoItem}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
