import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class home extends Component {
  render() {
    return (
      <button><Link to='/end'>click</Link></button>
    )
  }
}

export default home