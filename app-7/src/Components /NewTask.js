import React, { Component } from "react";

class NewTask extends Component {
  constructor () {
    super(); 

    this.state = {
      input: ""
    }
}

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value 
    })
  }
  
  handleInput() {
    this.props.userInput(this.state.input); 
    this.setState({
      input: ""
    })
  }

  render() {
    console.log(this.props.list);
    return (
      <div>
        <input value={this.state.input} placeholder="Enter new task" onChange={event => this.handleInput(event.target.value)}/>
        <button onClick={this.addButton}>Add</button>
      </div>
    );
  }
}

export default NewTask;