import React, {useState} from 'react';


function HookFunction() {
    const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count+1)}>Count: {count}</button>
      <button onClick={() => setCount(count-1)}>decrement {count}</button>
    </div>
  );
}

export default HookFunction;
