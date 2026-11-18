// Import useContext hook
import { useContext } from "react";

// Import UserContext
import { UserContext } from "../context/UserContext";

function Navbar() {

  // Access global state using useContext
  const { username } = useContext(UserContext);

  return (
    <nav>
      <h2>My React Website</h2>

      {/* Display username from global state */}
      <h3>Welcome, {username}</h3>
    </nav>
  );
}

export default Navbar;