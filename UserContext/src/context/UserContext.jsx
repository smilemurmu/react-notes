import { createContext, useState } from "react";

// Step 1: Create Context
// Context allows us to share data between components
export const UserContext = createContext();

// Step 2: Create Provider Component
export function UserProvider({ children }) {

    // Create global state using useState
  const [username, setUsername] = useState("Smile");

  // Data and function that we want to share globally
  const value = {
    username,
    setUsername
  };

   return (
    // Provider makes the data available to child components
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}