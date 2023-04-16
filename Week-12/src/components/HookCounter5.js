import React, {useState, useEffect} from 'react';

function HookCounter5() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
        console.log("hi")
        document.title = `You Clicked ${count} times`
    },[count])
  return (
    <div>
    <input type='text' value={name} onChange={e => setName(e.target.value) }/>
    <button onClick={()=>setCount(prevcount=>prevcount+1)}>Counter:{count}</button>
    </div>
  );
}

export default HookCounter5;

