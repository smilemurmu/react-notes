
import { useState, useEffect } from "react";

function App() {

  // Store API data
  const [users, setUsers] = useState([]);

  // Track loading state
  const [loading, setLoading] = useState(true);

  // Store error message
  const [error, setError] = useState("");

  useEffect(() => {

    // Create function to fetch data
    const fetchUsers = async () => {

      try {

        // Start loading
        setLoading(true);

        // API request
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        // Check API response
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        // Convert response into JSON
        const data = await response.json();

        // Store API data
        setUsers(data);

      }
      
      catch (err) {

        // Handle API error
        setError(err.message);

      } 
      
      finally {

        // Stop loading
        setLoading(false);

      }
    };

    // Call function
    fetchUsers();

  }, []);

  // Show loading message
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Show error message
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Display API data
  return (
    <div>
      <h1>User List</h1>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

    </div>
  );
}

export default App;
