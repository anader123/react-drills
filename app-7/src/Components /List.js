import React, { Component } from 'react'
import Todo from "./Todo"

export default class List extends Component {
    render() {
        let taskList = this.props.tasks.map((element, index) => {return <Todo key={index} tasks={element} />
    });
        return(
            <div>{taskList}</div>
        )
    }
}