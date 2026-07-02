import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import User from './components/User'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <> <Navbar /><About /></>
    },
    {
      path: "/profile",
      element: <> <Navbar /><Profile /></>
    },
    {
      path: "/user/:username",
      element: <> <Navbar /><User /></>
    },
  ])

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
