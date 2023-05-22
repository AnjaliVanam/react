import React from 'react'

function Greet(props){
    console.log(props)
    return (
        
    <h1>Hello { props.name } your age is { props.age}</h1>
    )

}
// const Greet = () => <h1>hello Anjali</h1>
export default Greet