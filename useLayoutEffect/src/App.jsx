import { useState , useEffect , useLayoutEffect } from 'react'

import './App.css'

function App() {
  
  useLayoutEffect(() => {
    console.log('useLayoutEffect called')
  })

  const [count, setCount] = useState(0)

  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
 