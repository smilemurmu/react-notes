import React from 'react'
import { useState } from 'react'

function useCounter() {

    const [count, setCount] = useState(0)

    //increment function
    const increment = () => {
        setCount(count + 1)
    }

    //decrement function
    const decrement = () => {
        setCount(count - 1)
    }
    
    //reset function
    const reset = () => {
        setCount(0)
    }
    
  return {
    count,
    increment,
    decrement,
    reset
  }
}

export default useCounter