import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'Clicked'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>EventBind</button>
                <button onClick={()=>this.clickHandler()}>EventBind</button>
                
                </div>
        )
    }
}

export default EventBind