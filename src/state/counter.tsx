import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>count {count}</h1>
      <button onClick={addCount}> add</button>
    </div>
  );
}
