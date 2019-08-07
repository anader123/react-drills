import React, { Component } from 'react'

export default class ImageCompnent extends Component {
    constructor(){
        super();
    
    }

    render(){
        return(
            <div>
                <img src={this.props.imageSRC}></img>
            </div>
        )
    }
}