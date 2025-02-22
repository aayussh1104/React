import './App.css'
import gojo from "./assets/GOJO.jpg"
import harsh from './assets/harsh.jpg'
import nisha from "./assets/nisha.jpg"
import UserCard from "./components/UserCard"

function App() {
  

  return (
    <>
      <div className="container">
        <UserCard name = "Nisha Rohilla" description = "Description of Nisha Rohilla" image = {nisha}  style = {{"border-radius" : "10px"}}/>
        <UserCard name = "Harsh Porwal" description = "Description of Harsh Porwal" image = {harsh}  style = {{"border-radius" : "10px"}}/>
        <UserCard name = "Aayush Gupta" description = "Description of Aayush Gupta" image = {gojo}  style = {{"border-radius" : "10px"}}/>
      </div>
    </>
  )
}

export default App
