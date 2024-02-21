import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let addValue = () => {
    setCount((count) => count + 1);
  };
  let removeValue = () => {
    if (count <= 0) {
      setCount((count = 0));
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="card">
        <h1>your value is {count}</h1>
        <div className="btn">
          <button onClick={addValue}>Add value</button>
          <button onClick={removeValue}>remove value</button>
        </div>
      </div>
    </>
  );
}

export default App;
