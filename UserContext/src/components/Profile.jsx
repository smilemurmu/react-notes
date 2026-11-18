// Import useContext hook
import { useContext } from "react";

// Import UserContext
import { UserContext } from "../context/UserContext";

function Profile() {

  // Access global state and update function
  const { username, setUsername } = useContext(UserContext);

  // Function to change username
  const changeName = () => {
    setUsername("Rahul");
  };

  return (
    <div>
      <h2>Profile Page</h2>

      {/* Display current username */}
      <h3>Username: {username}</h3>

      {/* Button to update global state */}
      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}

export default Profile;