import { useState } from 'react';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';

function App() {
  const[isLoggedin, setLoggedin] = useState(true);



  // USING EARLY RETURN
  if(!isLoggedin){
    return(
      <Login/>
    )
  }




  // USING LOGICAL OPERATORS
  return(
    <div>
      <h1>WELCOME EVERYONE TO WEB DEVELOPMENT PRACTICES BY AAYUSH</h1>
      <div>
        {isLoggedin && <Logout/>}
      </div>
    </div>
  )







  // USING TERNARY OPERATOR
  // return(
  //   <div>
  //     {isLoggedin? <Logout/> : <Login/>}
  //   </div>
  // )
  






  // USING IF ELSE STATEMENT
  // if(isLoggedin){
  //   return (
  //     <Logout/>
  //   )
  // }else{
  //   return(
  //     <Login/>
  //   )
  // }
}

export default App
