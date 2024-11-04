import { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';

function App() {

  let [counter, setCounter] = useState(5)

  // this useState hook will not only change its value but it will also propagate it into the ui
  // counter is any variable and setCounter is any method which we will take as an input to perform the tasks

  // let counter = 5;

  const addValue = ()=>{
    if(counter>=20){
      // setCounter(counter +1)
      alert("Limit crossed");
      counter = -1;
    }
    counter = counter +1;
    setCounter(counter);
  }

  const removeValue = ()=>{
    if(counter>=0){
      // setCounter(counter - 1);
      alert("Limit starts")
      counter = 1;
    }
    counter = counter - 1;
    setCounter(counter);
  }
  
  return (
    <>
    <h1>Aayush aur React</h1>
    <h2>Counter value : {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <br />
    <button onClick={removeValue} >Remove value</button>
    </>
  )
}

export default App




// hooks are the special methods and hooks start with use and different methods are assigned with different tasks
// hooks are the methods in react with which data will get updated or changed in UI
// the problem of changing data when one button is clicked or one event is performed and you have to select a lot of elements in it is resolved in react with the help of hooks

// react says that we can do whatever we can take any data we need but if we want to change anything in UI react will do it