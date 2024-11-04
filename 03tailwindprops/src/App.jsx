// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind test</h1>
      <Card username= "Bored " h12=" Fun "/>
      <Card  username = "YoYo" h12="No fun"/>
      
          
    </>
  )
}

export default App




// props makes components reusable
// props is an object