import { useState } from 'react'
import './App.css'
import Logout from './components/Logout'
import Login from './components/Login'

function App() {
  
  const [isLogin, setIsLoggedIn] = useState(true)

  return (
    <div>
      <h1>
        Welcome to the Conditional Rendering App!
      </h1>
      <div>
        {isLogin && <Logout />}
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {isLoggedIn ? <Logout /> : <Login />}
  //   </div>
  // )

//   if (isLoggedIn) {
//     return (
//       <Logout />
//     );

  
// }

// else {
//   return (
//     <Login />
//   );
// }
}

export default App;
