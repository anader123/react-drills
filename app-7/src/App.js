import React, { Component } from "react";
import "./App.css";
import NewTask from "./Components /List";
import List from "./Components /NewTask";

class App extends Component {
  constructor () {
    super(); 

  this.state = {
    list: []
  }
}

  addButton= (userInput) => {
    this.setState({
      list: [...this.state.list, this.state.userInput], 
      userInput: ''
    })
} 

  render() {
    return (
      <div className="App">
       <h1>My to-do list:</h1>
       <List tasks={this.state.list}/> 
       <NewTask userInput={this.state.addButton} /> 
      </div>
    );
  }
}

export default App;