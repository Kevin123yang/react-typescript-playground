import React, { useState } from "react";

export default function Parent(){
    const [count, setCount] = useState(0)
    return <div>
    <button onClick={() => setCount(count + 1)}>
      add
    </button>
    <div>count {count}</div>
    <MemoChild />
  </div>
}
// use ✅ it creates new one to compare old one
const MemoChild = React.memo(Child);
// ❌ React.memo(Child)
function Child() {
    console.log("Child render");
  
    return <h1>Child</h1>;
  }
