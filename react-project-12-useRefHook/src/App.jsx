import { useRef, useState } from 'react';
import './App.css';

function App() {

  // const [count, setCount] = useState(0);
  // let val =useRef(0);                  /// this val now is created an object and its initial value is 0 means the variable which are set with using useRef() hook does not change its value during every re-render

  // function handleIncrement(){
  //   val.current = val.current + 1;
  //   console.log("Value of val = ",val.current);
  //   setCount(count+1);
  // }

  //   let btnRef = useRef();                                        // the main use of useRef() hook is to access the dom elements of any thing present inside your UI


  // function changeColor(){
  //   btnRef.current.style.backgroundColor = "red";
  // }


  // // it runs on every render
  // useEffect(()=>{
  //   console.log("Mai firse render hogya");
  // })

  const [time, setTime] = useState(0);
  
  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval(()=>{
      setTime(time => time+1);
    },1000)
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }
  

  return (
    <>
      <h1>Stopwatch : {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br />
      <br />

      <button onClick={stopTimer}>
        Stop
      </button>

      <br />
      <br />

      <button onClick={resetTimer}>
        Reset
      </button>


      {/*<div>
        <button onClick={handleIncrement} ref ={btnRef}>
          Increment
        </button>

        <br />
        <br />

        <button onClick={changeColor}>
          Change color of the 1st button
        </button>

        <br />
        <br />

        <div>Count is : {count}</div>
      </div>*/}
    </>
  )
}

export default App
