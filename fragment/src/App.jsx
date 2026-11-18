import { Fragment, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  

  return (
    <Fragment>
      <h1>Smile Murmu</h1>
       <Data />
      <p>Web Developer</p>
      
    </Fragment>
  )
}

function Data(){
  return(
    <Fragment>
      

      <span>hi coder</span><p>this app is running</p>
    </Fragment>
  )
}

export default App
