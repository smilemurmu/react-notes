import React from 'react'

const Maps = () => {

    const products = [ "Watch", "Mobile", "Desktop", "Tablet", "Laptop", "Camera", "Headphones" ]

    const users = [
        {
            id: 1,
            name: "John Doe",
            age: 30,
        },
        {
            id: 2,
            name: "Jane Smith",
            age: 25,
        },
        {
            id: 3,
            name: "Mike Johnson",
            age: 35,
        }
    ]
  return (
    <div>
      <h1>Maps function</h1>
      
      {/* {
        products.map((product, index) => (
            <h1 key={index}>{product}</h1>
        ))
      } */}

      {
        users.map((user, index) => (
            <div key={user.id}>
                 <h2>{user.name}</h2>
                 <p>Age: {user.age}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Maps
