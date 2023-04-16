import React, {useState} from 'react';

function HookCounter2() {
    const initialcount = 0
    const [count, setCount] = useState(initialcount)
    const incement_five_no_prev = () =>{
        for(let i=0;i<5;i++){
            setCount(count+1)

        }
    }
    const incement_five = () =>{
        for(let i=0;i<5;i++){
            setCount(prevcount=>prevcount+1)

        }
    }
  return (
    <div>
      Count: {count}
      <button onClick={()=>setCount(prevcount=>prevcount+1)}>Increment</button>
      <button onClick={()=>setCount(prevcount=>prevcount-1)}>Decrement</button>
      <button  onClick={()=>setCount(initialcount)}>Reset</button>
      <button  onClick={incement_five_no_prev}>Increment_5</button>
      <button  onClick={incement_five}>IncrementFive</button>
    </div>
  );
}

export default HookCounter2;

