import React, {useState} from 'react';

function HookCounter3() {
    const [name, setName] = useState({firstName:'', lastName:''})
  return (
    <div>
      <form>
      <input type = 'text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}></input>
      <input type = 'text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}></input>
      
      </form>
      <h1>Your first Name is {name.firstName}</h1>
      <h1>Your last Name is {name.lastName}</h1>
    </div>
  );
}

export default HookCounter3;
