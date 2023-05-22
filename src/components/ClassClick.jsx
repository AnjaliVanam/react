import React, { Component } from 'react'

class classClick extends Component {

  clickHandler(){
    console.log("clicked the btton")
  }
  render() {
    return (
      <div><button onClick={this.clickHandler}>Click me</button></div>
    )
  }
}

export default classClick