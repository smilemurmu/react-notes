import { useState } from 'react'
import { useCallback, useMemo } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('useCallback called');
  }, []);

  const memoizedValue = useMemo(() => {
    console.log('useMemo called');
    return count * 2;
  }, [count]);

  return (
    <>
    <h1>Count: {count}</h1>
    <h2>resust: {memoizedValue}</h2>
      <button onClick={() => setCount (count + 1)}>Increment</button>
      <button onClick={handleClick}>Click Me</button>

    </>
  )
}

export default App
