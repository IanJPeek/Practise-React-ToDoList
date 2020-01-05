import React from 'react';


function DeleteToDoItem(props) {
  console.log(props)
  return (
    <div>
      <button 
      // function passed on props currently infinite loops?
      // deleteItem={props.deleteItem(props.item)}
      
      >Delete</button>
    </div>

  );

}

export default DeleteToDoItem;