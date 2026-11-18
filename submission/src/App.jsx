import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hello"+ name);
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button>Submit</button>
    </form>
    </>
  )
}

export default App
