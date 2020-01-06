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
        <ToDoList toDoArray={this.state.toDoArray}
        deleteItem={this.deleteItem}
        ></ToDoList>
      </div>
    );
  }

addNewItemToDo = (newToDoItem) => {
  this.setState((currentState ) => {
  return {toDoArray: [newToDoItem, ...currentState.toDoArray]};
  });
}

deleteItem = (itemToDelete) => {


  console.log("delete done on: ", itemToDelete)

const arrayPostDelete = this.state.toDoArray.filter (item => item!==itemToDelete);
this.setState({arrayPostDelete});

  // this.setState((currentState) =>{
  //   const deletedArray = [...currentState.toDoArray.filter(item => item!==itemToDelete )]
  //   console.log(deletedArray)
  //   return{toDoArray: [deletedArray]}
  // })

}


}

export default ToDoPage;