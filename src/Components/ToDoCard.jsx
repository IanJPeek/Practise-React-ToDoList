import React from 'react';
import DeleteToDoItem from "./DeleteToDoItem"

function ToDoCard(props) {
  return (
    <div>
      <br></br>
      <li>{props.item}</li>
      <DeleteToDoItem item={props.item} deleteItem={props.deleteItem}></DeleteToDoItem>
    </div>
  );
}

export default ToDoCard;