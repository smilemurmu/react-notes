import React from 'react'
import Child from './child'
import { useState } from 'react'

const parent = () => {

    const [name, setName] = useState("parent")
  return (
    <div>
        I m a parent component and my name is {name}
      <Child child = {name} setChildName = {setName} />
    </div>
  )
}

export default parent
