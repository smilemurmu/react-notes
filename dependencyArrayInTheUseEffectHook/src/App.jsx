// Empty dependency array in the useEffect hook
// import { useEffect } from 'react'
// import './App.css'

// function App() {
  
//   // useEffect hook with an empty dependency array
//   useEffect(() => {
//     console.log('useEffect called')
//   }, [])

//   return (
//     <>
//       <h1>useEffect Hook with Empty Dependency Array</h1>
//     </>
//   )
// }

// export default App


// // dependency array with a variable in the useEffect hook
// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {

//   const [count, setCount] = useState(0);

//   // useEffect hook with a dependency array containing the count variable
//   useEffect(() => {
//     console.log("count value changed:", count);
//   }, [count]);

//   return (
//     <>
//       <h1>useEffect Hook with Dependency Array</h1>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </>
//   )
// }

// export default App


// dependency array with no array in the useEffect hook
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  // useEffect hook with no dependency array
  useEffect(() => {
    console.log('useEffect called')
  })

  return (
    <>
      <h1>useEffect Hook with No Dependency Array</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </>
  )
}

export default App