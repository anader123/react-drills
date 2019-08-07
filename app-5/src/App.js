import React, { Component } from "react";
import "./App.css";
import ImageComponent from './Components/ImageComponent'

class App extends Component {
  constructor(){
    super(); 

    this.state = {
      image: ''
    }
  }

  render() {
    return (
      <div className="App">
        <ImageComponent imageSRC="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.r_UpzFMmRIYhWzitzdJKGwHaE8%26pid%3DApi&f=1"/> 
      </div>
    );
  }
}

export default App;
