import { createContext } from 'react'
import './App.css'
import ChildA from './component/ChildA'


// create
// provider
// consumer

const data = createContext()

function App() {
  
  const name = 'Smile Murmu'

  return (
    <data.Provider value={name}>
      <ChildA />
    </data.Provider>
  )
}

export default App

export {data}