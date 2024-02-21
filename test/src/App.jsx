import { useGreet } from "./Hooks/useGreet";
const App = () => {
  const [count, increment, decrement] = useGreet(0);
  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <h1>hello</h1>
    </div>
  );
};

export default App;
