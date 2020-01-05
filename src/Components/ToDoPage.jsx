import React, { Component } from 'react';
import ToDoList from "./ToDoList";
import ToDoItemAdder from "./ToDoItemAdder"

class ToDoPage extends Component {
  state = {
    toDoArray: ["Create React App", "Feel smug"]
  };

  render() {
    return (
      <div>
        <ToDoItemAdder addNewItemToDo={this.addNewItemToDo}></ToDoItemAdder>
        <ToDoList toDoArray={this.state.toDoArray}></ToDoList>
      </div>
    );
  }

addNewItemToDo = (newToDoItem) => {
  this.setState((currentState ) => {
  return {toDoArray: [newToDoItem, ...currentState.toDoArray]};
  });
}

}

export default ToDoPage;