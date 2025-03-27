import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleClick(){
    setCount(count +1);
  }


  function expensiveTask(num){
    console.log("Inside expensive task");
    for(let i = 0; i<100000000; i++){}
    return num*2;
  }

  let doubleValue =  useMemo(() => expensiveTask(input), [input])

  

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <h1>Count : {count}</h1>
      <h3>Double : {doubleValue}</h3>
      <input type="number" placeholder='Enter a number' value={input} 
      onChange={(e)=>{
        setInput(e.target.value)
      }}
      />
    </div>
  )
}

export default App
