import React, { Component } from 'react'

export default class Cell extends Component{
    constructor(prop){
        super();
        this.state ={
            color: prop.value
        }
    }
    changeColor = () => {
        this.setState({color: "#333"})
    }

    render(){
        return (
            <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}} ></div>
        )
    }
}