import React from 'react'
import { useState } from 'react'

export default function AddUser({setUser}) {

    
  return (
    <div>
      <h1>Add User</h1>
      <input type="text" onChange={(event) =>setUser(event.target.value)} placeholder='Enter your name' />
      <hr />
    </div>
  )
}
