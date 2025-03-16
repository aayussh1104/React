import { createContext, useState } from 'react';
import './App.css';
import ChildA from './components/childA';

const ThemeContext = createContext();
const UserContext = createContext();

function App() {
  const[theme, setTheme]= useState('light')
  const[user, setUser] = useState({name:"Nisha"})
  

  return (
    
    <>
      <UserContext.Provider value={user}>
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <div id='container' style ={{backgroundColor : theme === 'light'?'beige':'black'}}>
        <ChildA/>
        </div>
      </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
export { ThemeContext, UserContext };

