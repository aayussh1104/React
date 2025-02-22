import { useState } from 'react';
import './App.css';
import BTN from './components/button';

function App() {
  const[count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  
  return (
    <>
    <div>
      <BTN handleClick= {handleClick}
        text="Click me">
          <h1>{count}</h1>

      </BTN>


      {/*<Card name="Aayush Gupta">
        <h1>BEST WEB DEVELOPMENT COURSE</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon!</p>
      </Card>*/}  {/* ALL THE ELEMENTS INSIDE THIS CARD COMPONENT ARE KNOWN AS CHILDREN  */}

    </div>
    </>
  )
}

export default App
