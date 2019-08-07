import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super(); 

        this.state = {
            user: '', 
            password: '' 
        }
    }; 

    handleUser = (event) => {
        this.setState({
            user: event.target.value,  
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value,  
        })
    }

    alertUser = () => {
        alert(`Username: ${this.state.user} Password: ${this.state.password}`)
    };

    render() {
        return(
            <div>
            <input placeholder="User" onChange={this.handleUser} type="text"></input>
            <input placeholder="Password" onChange={this.handlePassword} type="text"></input>
            <button onClick={this.alertUser}>Login</button>
            </div>
        )
    };
}
