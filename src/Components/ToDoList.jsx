import React from "react";
import ToDoCard from "./ToDoCard"

function ToDoList (props) {
    return (
      <div>
        <ul>
          {props.toDoArray.map(toDoItem => (
            <ToDoCard key={toDoItem} item={toDoItem} deleteItem={props.deleteItem}></ToDoCard>
            // <li key={toDoItem}>{toDoItem}</li>
          ))}
        </ul>
      </div>
    );
  }

export default ToDoList;
