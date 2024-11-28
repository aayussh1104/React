import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, { githubInfoLoader } from './components/Github/Github'
import Home from './components/home/home'
import User from './components/User/User'
import './index.css'
import Layout from './Layout'


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element:<Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>,
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
