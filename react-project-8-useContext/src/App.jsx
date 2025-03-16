import { createContext, useState } from 'react';
import './App.css';
import ChildA from './components/childA';

//step 1 : create context
const UserContext = createContext();
//step 2 : wrap all the child inside a provider
//step 3 : pass the value
//step 4 : consumer ke andar jakr value consume krlo


function App() {
  const[user, setUser]= useState({name:"Nisha"});

  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
    </>
  )
}

export default App
export { UserContext };


// we want to send data from app.jsx as props and receive data in childC.jsx, so we will create app.jsx as provider and we will create childC.jsx as consumers and stop extra data going from childA.jsx and childB.jsx 