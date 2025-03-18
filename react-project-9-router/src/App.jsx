import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import About from "./components/about";
import Courses from "./components/courses";
import Dashboard from "./components/dashboard";
import HomePage from './components/homePage';
import Mocks from "./components/mocks";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import Param from "./components/param";
import Reports from "./components/reports";

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
      </div>,
      children:[
        {
          path: "courses",
          element:<Courses/>
        },
        {
          path: "mock-test",
          element:<Mocks/>
        },
        {
          path: "reports",
          element:<Reports/>
        },
        {
          path: "*",                 // * means anything
          element: <NotFound/>
        }
      ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Param/>
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
