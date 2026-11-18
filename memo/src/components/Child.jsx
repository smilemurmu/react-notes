import { memo } from "react";


function Child({name}) {
  console.log("Child component rendered", {name});
  return <p>Hello, {name}</p>;
}

export default memo(Child)