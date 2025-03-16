import { useState } from 'react';
import './App.css';
import Card from './Components/card';

function App() {
  // create state
  // manage state
  // change state
  // sabhi child components mee state ko sync karwadunga

  const[name, setName] = useState('');

  return (
    <>
    <Card title = "Card1" name = {name} setName = {setName}/>
    <Card title = "Card2" name = {name} setName = {setName}/>
    <p>I am inside parent component and the value of name variable is {name}</p>
    </>
  )
}

export default App
