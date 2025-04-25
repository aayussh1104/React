import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Hompage from './components/hompage';
import Navbar from './components/navbar';
import Paste from './components/paste';
import Viewpaste from './components/viewpaste';

const router = createBrowserRouter(
  [
    {
      path : "/",
      element :
      <div>
        <Navbar/>
        <Hompage/>
      </div>
    },
    {
      path : "/pastes",
      element :
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path : "/pastes/:id",
      element :
      <div>
        <Navbar/>
        <Viewpaste/>
      </div>
    },
  ]
);

function App() {
  

  return (
    <>
      <div>
        <RouterProvider router = {router}/>
      </div>
    </>
  )
}

export default App
