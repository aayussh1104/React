import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import About from "./components/about";
import Dashboard from "./components/dashboard";
import HomePage from './components/homePage';
import Navbar from "./components/navbar";

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <HomePage/>
        <Navbar/>
      </div>
    },
    {
      path:"/about",
      element: 
      <div>
        <About/>
        <Navbar/>
      </div>
    },
    {
      path:"/dashboard",
      element: 
      <div>
        <Dashboard/>
        <Navbar/>
      </div>
    }
  ]
);

function App() {
  

  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
