import React from 'react';

function Header(props) {
  return (
    <div>
      <h1> {props.name}'s To-Do List</h1>
    </div>
  );
}

export default Header;