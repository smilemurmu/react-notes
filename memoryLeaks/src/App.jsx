
import React, { useEffect } from "react";

function Timer() {

  useEffect(() => {

    // Start timer
    const timer = setInterval(() => {
      console.log("Timer is running...");
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log("Timer stopped!");
    };

  }, []);

  return <h2>My Timer</h2>;
}

export default Timer;
