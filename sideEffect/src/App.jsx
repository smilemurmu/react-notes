import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
    console.log('useEffect called')
  }, [count])

  return (
    <>
    <h1>useEffect {count}</h1>
    <button onClick={() => setCount(count + 1)}>currentNo: {count}</button>  
    </>
  )
}

export default App

