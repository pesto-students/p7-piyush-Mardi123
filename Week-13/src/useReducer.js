import { useReducer } from "react";


const initial_state ={
    count: 0,
};

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count+1}
        case 'decrement':
            return {count:state.count-1}
        case 'reset':
            return {count:0}
        default:
            throw new Error("not defined") 

    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initial_state);
  
    const increment = () => {
      dispatch({ type: 'increment' });
    };
  
    const decrement = () => {
      dispatch({ type: 'decrement' });
    };
  
    const reset = () => {
      dispatch({ type: 'reset' });
    };
  
    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
  
  export default Counter;