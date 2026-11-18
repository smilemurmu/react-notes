import { useState } from 'react'
import './App.css'
import Sum from './components/Sum'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <Sum></Sum>
    </>
  )
}

export default App
