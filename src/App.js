import React from "react";
import Header from "./Components/Header";
import "./App.css";
import ToDoPage from "./Components/ToDoPage";

function App() {
  return (
    <div className="App">
        <Header name="LoggedInUser"></Header>
        <ToDoPage></ToDoPage>
    </div>
  );
}

export default App;
