import React, { Component } from "react";

class ToDoItemAdder extends Component {
  state = {
    itemInput: ""
  };

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add to list:
            <span> </span>
            <input
              type="text"
              name="itemInput"
              value={this.state.itemInput}
              onChange={this.handleChange}
              />
          </label>
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    console.log(this.state, "input")
    const {name, value} = event.target;
    this.setState({[name]:value})
  }

  handleSubmit = event => {
    event.preventDefault();

    const {itemInput} =this.state;
    this.props.addNewItemToDo(itemInput);
    this.setState({itemInput: ""});

  }  

}

export default ToDoItemAdder;
