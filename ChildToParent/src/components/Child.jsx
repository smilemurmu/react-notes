import React from 'react'

const child = (props) => {
  return (
    <div>
      <p>i m a child component name is {props.name}</p>
      <button onClick={()=> props.setChildName("parent2")}>click me</button>
    </div>
  )
}

export default child
