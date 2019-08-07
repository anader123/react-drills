import React, { Component } from "react";
import "./App.css";
import Todo from "./Components/Todo"

class App extends Component {
  constructor () {
    super(); 

  this.state = {
    list: [], 
    userInput: ''
  }
}

handleChange = (event) => {
  this.setState({
    userInput: event.target.value 
  })
}

addButton= () => {
  this.setState({
    list: [...this.state.list, this.state.userInput], 
    userInput: ''
  })
} 

  render() {
    console.log(this.state.list);
    return (
      <div className="App">
       <h1>My to-do list:</h1>
       <input type="text" placeholder="Enter new task" onChange={(event) => this.handleChange(event)}></input><button onClick={this.addButton}>Add</button>
       <Todo tasks={this.state.list}/> 
      </div>
    );
  }
}

export default App;
