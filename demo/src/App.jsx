import { useCallback, useState } from "react";
import "./app.css";
import ChildA from "./Components/ChildA";
const App = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const loading = useCallback(() => {}, [count]); //rerender when we change in count var child component called
  return (
    <div>
      <h1>Learning use callback Hook</h1>
      <ChildA loading={loading} counting={count} />
      <h3>{add}</h3>

      <button
        onClick={() => {
          setAdd(add + 1);
        }}>
        Add vlaue
      </button>

      <br />
      <br />

      <h3>{count}</h3>

      <button
        onClick={() => {
          setCount(count + 5);
        }}>
        count
      </button>
    </div>
  );
};

export default App;
