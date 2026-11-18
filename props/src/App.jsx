import { useState } from 'react'
import './App.css'
import College from './college'
import Student from './Student'
import User from "./user"

function App() {

  // let userName = "Smile Murmu";
  // let age = 23;
  // let email = "smile123@gmail.com";
  // let userObject1={
  //   name: "Smile Murmu",
  //   age: 23,
  //   email: "smile123@gmail.com",
  //   city: "Ranchi"
  // }

  // let userObject2={
  //   name: "John Doe",
  //   age: 30,
  //   email: "john12@gmail.com",
  //   city: "New York"
  // }

  // let userObject3={
  //   name: "Jane Smith",
  //   age: 28,
  //   email: "jane@gmail.com",
  //   city: "Los Angeles"
  // }


  let collegeName = ["IIT", "NIT", "NEET", "JEE", "UPSC"];

  const [student, setStudent] = useState()

  return (
    <div>
      <h1>Props in React</h1>

      <Student name={student} />
      <button onClick={() => setStudent("Smile")}> update student name</button> 
      <College names={collegeName} />

      {/* <User name={userName} age={age} email={email} /> */}
      
    </div>
  )
}

export default App;