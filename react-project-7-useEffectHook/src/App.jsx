
import { useState } from 'react';
import './App.css';

function App() {
  const[count,setCount]= useState(0);
  const[total, setTotal]= useState(1);
  
 /* useEffect(()=>{
    // first --> side-effect function

    return()=>{
      // second --> clean-up function
    }, [count]         // third --> comma separated dependencies array
  })*/


  // variation:1
  // runs on every render
  /*useEffect(()=>{
    alert("I will run on each render")
  })*/

  // variation:2
  // runs on only first render
  /*useEffect(()=>{
    alert("I will run on only first render")
  },[])*/

  // variation:3
  // runs on only one variable if it is effected
  /*useEffect(()=>{
    alert("I will run every time when count is updated")
  },[count])*/

  // variation:4
  //multiple dependecies
  /*useEffect(()=>{
    alert("I will run very time count or total is updated")
  },[count, total])*/

  // variation : 5
  // with clean-up function
  /*useEffect(()=>{
    alert("Count is updated")
    return()=>{
      alert("count is unmounted from UI")
    }
  },[count])*/

  function handleClick(){
    setCount(count+1);
  }

  function handleClickTotal(){
    setTotal(total+1);
  }

  return (
    <>
    <div>
      <button onClick={handleClick}>Update Count</button>
      <br />
      Count is : {count}
      <br />
      <br />
      <button onClick={handleClickTotal}>Update Total</button>
      <br />
      Total is : {total}
    </div>
    </>
  )
}

export default App
