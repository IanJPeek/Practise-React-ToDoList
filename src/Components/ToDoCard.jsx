import React from 'react';

function ToDoCard(props) {
  return (
    <div>
      <li>{props.item}</li>
    </div>
  );
}

export default ToDoCard;