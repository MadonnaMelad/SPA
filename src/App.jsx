import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './Components/Start/Start'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'


let x = createBrowserRouter([
  {path:"",element:<Layout/>,
    children:[
    {index:true,element:<Start/>},    
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>}
  ]}
])
function App() {

  return (
  <>
    <RouterProvider router={x}></RouterProvider>
  </> 
  )

}

export default App
