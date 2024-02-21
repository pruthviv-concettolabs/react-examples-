import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(" useEffect work in {count} times");
  }, []);
  // we use [] in useEffect when when want that some hook not need to repeat
  return (
    <>
      4ppp
      <h1>total click {count}</h1> <br />
      <button onClick={() => setCount(count + 1)}> click me </button>
    </>
  );
}

export default App;
