import React from 'react'

function Click() {
    function clickHandler(){
        console.log('object')
    }
  return (
    <div><button onClick={clickHandler}>Click</button></div>
  )
}

export default Click