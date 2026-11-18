
import { useState, useEffect } from "react";

function App() {

  // Store the text entered by the user
  const [search, setSearch] = useState("");

  // Store users received from the API
  const [users, setUsers] = useState([]);

  // useEffect runs whenever search changes
  useEffect(() => {

    // If search box is empty, clear the results
    if (search.trim() === "") {
      setUsers([]);
      return;
    }

    // Start a timer of 500 milliseconds
    const timer = setTimeout(async () => {

      try {

        // Send API request to search users by name
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${encodeURIComponent(search)}`
        );

        // Check whether API response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        // Convert API response into JSON
        const data = await response.json();

        // Store the received users in state
        setUsers(data);

      } catch (error) {

        // Display error if API request fails
        console.log("Error:", error.message);

      }

    }, 500);

    // Cancel the previous timer if user types again
    return () => {
      clearTimeout(timer);
    };

  }, [search]);

  return (
    <div>

      {/* Page heading */}
      <h1>Debounce Search</h1>

      {/* Search input field */}
      <input
        type="text"
        placeholder="Search users..."
        value={search}

        // Update search state whenever user types
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Display matching users */}
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
