import useCounter from './hook/useCounter'
import './App.css'

function App() {

  const {count, increment, decrement, reset} = useCounter()

  return (
    <>
      <h1>{count}</h1>
      
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
