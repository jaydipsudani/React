import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import {About,Contact,User} from './index.jsx'

//import About from './Componets/About/About.jsx'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Github, {githubInfoLoader} from './Componets/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
     <Route path='' element={<Home />} />
     <Route path='about/' element={<About />} />
    <Route path='contact/' element={<Contact />} />
    <Route path='user/' element={<User />} >
      <Route path=':userid' element={<User/>} />
    </Route>
   <Route
  loader={githubInfoLoader}
    path='github/' 
    element={<Github />} />
   <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
