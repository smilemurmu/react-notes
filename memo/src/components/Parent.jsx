import React from 'react'
import { useState , useCallback } from 'react'
import Child from './Child'

function Parent() {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);

  return (
    <>
    <button onClick={() => setCount(count + 1)}>Increment{count}</button>
    <Child name="Alice" onClick={handleClick} />
    </>
  );
}

export default Parent