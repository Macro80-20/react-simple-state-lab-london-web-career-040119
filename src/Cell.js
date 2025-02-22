import React, { Component } from 'react';

export default class Cell extends Component {
    state = {
        color: this.props.value
    }

    updateColor = () => 
        this.setState({
            color: '#333'
        })
    

    render(){
        return(
            <div onClick={() => this.updateColor()} className="cell" style={{backgroundColor: this.state.color}}>
            </div>
        )
    }


}

