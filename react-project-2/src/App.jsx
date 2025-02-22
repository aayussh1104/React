import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div id='container'>
        <p id='paragraph'>You clicked {count} times</p>
        <button id='button' onClick={handleClick}>Click Me</button>
      </div>
    </>
  )
}

export default App
